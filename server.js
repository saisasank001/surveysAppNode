var path = require('path');
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var bodyParser = require('body-parser');
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
var io = require('socket.io')(http);
app.use(bodyParser.json({ limit: '50mb' }))

app.set('socketio', io);

app.use(function(req, res, next) {
    req.io = io;
    next();
});

app.io = io;


const cors = require('cors')
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
    console.log('Drop and Resync with { force: false }');
});

require('./app/route/category.route.js')(app);
require('./app/route/location.route.js')(app);
require('./app/route/role.route.js')(app);
require('./app/route/survey.route.js')(app);
require('./app/route/tenant.route.js')(app);
require('./app/route/user.route.js')(app);
require('./app/route/finalresponse.route.js')(app);

//api documentation url
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/test', function(req, res) {
    res.send('server is up and running');
});

app.use(express.static('public'))

// Create a Server
var server = http.listen(5000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})