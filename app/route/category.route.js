module.exports = function (app) {

    const category = require('../controller/category.controller.js');

    // Create a new Category
    app.post('/api/category/create', category.create);

    // Retrieve all Category
    app.get('/api/category/getAllCategories', category.findAll);

    // Retrieve a single Category by Id
    app.get('/api/category/:CategoryId', category.findById);

    app.post('/api/category/getCategoriesByUser', category.getCategoriesByUser);

    app.post('/api/category/getCategoriesInMobile', category.getCategoriesInMobile);

    app.get('/api/category/age/:age', category.lookUpByAge);

    // Update a Category with Id
    app.put('/api/category/:CategoryId', category.update);

    // Delete a Category with Id
    app.delete('/api/category/:CategoryId', category.delete);

    // Delete all category
    app.delete('/api/category/all/delete', category.deleteAll);
};
