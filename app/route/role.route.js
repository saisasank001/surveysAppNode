module.exports = function(app) {
 
    const role = require('../controller/role.controller.js');
 
    // Create a new Role
    app.post('/api/role/create', role.create);
 
    // Retrieve all Role
    app.get('/api/role', role.findAll);
 
    // Retrieve a single Role by Id
    app.get('/api/role/:RoleId', role.findById);

    app.get('/api/role/age/:age', role.lookUpByAge);
 
    // Update a Role with Id
    app.put('/api/role/:RoleId', role.update);
 
    // Delete a Role with Id
    app.delete('/api/role/:RoleId', role.delete);

    // Delete all role
    app.delete('/api/role/all/delete', role.deleteAll);
}
