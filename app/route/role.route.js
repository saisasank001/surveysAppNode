module.exports = function (app) {

    const role = require('../controller/role.controller.js');

    // Create a new Role
    app.post('/api/role/create', role.create);

    // Retrieve all Role
    app.get('/api/roles/getAllRoles', role.findAll);

    // Retrieve a single Role by Id
    app.get('/api/roles/getRoleById/:roleId', role.findById);

    app.get('/api/role/age/:age', role.lookUpByAge);

    // Update a Role with Id
    app.post('/api/role/update/:RoleId', role.update);

    // Delete a Role with Id
    app.get('/api/role/delete/:RoleId', role.delete);

    // Delete all role
    app.delete('/api/role/all/delete', role.deleteAll);
};
