module.exports = function (app) {

    const location = require('../controller/location.controller.js');

    // Create a new Location
    app.post('/api/location/create', location.create);

    // Retrieve all Location
    app.get('/api/location/getAllLocations', location.findAll);

    // Retrieve a single Location by Id
    app.get('/api/location/getLocationById/:LocationId', location.findById);

    app.get('/api/location/age/:age', location.lookUpByAge);

    // Update a Location with Id
    app.put('/api/location/:LocationId', location.update);

    // Delete a Location with Id
    app.get('/api/location/delete/:LocationId', location.delete);

    // Delete all location
    app.delete('/api/location/all/delete', location.deleteAll);
};
