module.exports = function(app) {
 
    const tenant = require('../controller/tenant.controller.js');
 

    app.post('/api/tenant/create',tenant.create);
 
    // Retrieve all Tenant
    app.get('/api/tenant/getAllTenants', tenant.findAll);
 
    // Retrieve a single Tenant by Id
    app.get('/api/tenant/:TenantId', tenant.findById);

    app.get('/api/tenant/age/:age', tenant.lookUpByAge);

    app.get('/api/tenant/checkIsActive:TenantId', tenant.checkIsActive);

    app.post('/api/tenant/changeActive:TenantId', tenant.changeActive);    
     
    // Update a Tenant with Id
    app.put('/api/tenant/:TenantId', tenant.update);
 
    // Delete a Tenant with Id
    app.delete('/api/tenant/:TenantId', tenant.delete); 

    // Delete all tenant
    app.delete('/api/tenant/all/delete', tenant.deleteAll);
}
