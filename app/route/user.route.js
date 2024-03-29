module.exports = function (app) {

    const user = require('../controller/user.controller.js');

    // Create a new User
    app.post('/api/user/create', user.create);

    //user login route
    app.post('/api/user/login', user.login);

    // Retrieve all User
    app.get('/api/users', user.findAll);

    // Retrieve a single User by Id
    app.get('/api/user/:UserId', user.findById);

    app.get('/api/user/age/:age', user.lookUpByAge);

    // Update a User with Id
    app.put('/api/user/:UserId', user.update);

    // Delete a User with Id
    app.get('/api/user/delete/:UserId', user.delete);

    // Delete all User
    app.delete('/api/user/all/delete', user.deleteAll);
};
