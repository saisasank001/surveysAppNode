var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: false }');
});

require('./app/route/category.route.js')(app);
require('./app/route/location.route.js')(app);
require('./app/route/role.route.js')(app);
require('./app/route/survey.route.js')(app);
require('./app/route/tenant.route.js')(app);
require('./app/route/user.route.js')(app);

//api documentation url
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Create a Server
var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})
