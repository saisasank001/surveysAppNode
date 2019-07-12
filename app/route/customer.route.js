module.exports = function(app) {
 
    const customers = require('../controller/customer.controller.js');
 
    // Create a new Customer
    app.post('/api/customers/create', customers.create);
 
    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/customers/:customerId', customers.findById);

    app.get('/api/customers/age/:age', customers.lookUpByAge);
 
    // Update a Customer with Id
    app.put('/api/customers/:customerId', customers.update);
 
    // Delete a Customer with Id
    app.delete('/api/customers/:customerId', customers.delete);

    // Delete all Customers
    app.delete('/api/customers/all/delete', customers.deleteAll);
}