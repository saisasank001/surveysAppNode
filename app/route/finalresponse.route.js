module.exports = function (app) {

    const finalResponse = require('../controller/finalresponse.controller.js');

    // Create a new finalResponse
    app.post('/api/finalResponse/create', finalResponse.create);
    // Retrieve all finalResponse
    app.get('/api/finalResponse/getAllCategories', finalResponse.findAll);

    // Retrieve a single finalResponse by Id
    app.get('/api/finalResponse/:finalResponseId', finalResponse.findById);

    app.post('/api/finalResponse/getCategoriesByUser', finalResponse.getCategoriesByUser);

    app.get('/api/finalResponse/getCategoriesInMobile/:TenantId', finalResponse.getCategoriesInMobile);

    app.get('/api/finalResponse/age/:age', finalResponse.lookUpByAge);

    // Update a finalResponse with Id
    app.put('/api/finalResponse/:finalResponseId', finalResponse.update);

    // Delete a finalResponse with Id
    app.get('/api/finalResponse/delete/:finalResponseId', finalResponse.delete);

    // Delete all finalResponse
    app.delete('/api/finalResponse/all/delete', finalResponse.deleteAll);
};
