module.exports = function (app) {

    const survey = require('../controller/survey.controller.js');

    // Create a new Survey
    app.post('/api/survey/create', survey.create);

    // Retrieve all Survey
    app.get('/api/survey', survey.findAll);

    // Retrieve all Survey
    app.get('/api/survey/surveyFiltered/:UserID/:categoryID', survey.findSurveys);


    // Retrieve a single Survey by Id
    app.get('/api/survey/:SurveyId', survey.findById);

    app.get('/api/survey/age/:age', survey.lookUpByAge);

    // Update a Survey with Id
    app.post('/api/survey/update/:SurveyId', survey.update);
    app.post('/api/survey/changeStatus/:SurveyId', survey.updateStatus);

    // Delete a Survey with Id
    app.delete('/api/survey/:SurveyId', survey.delete);

    // Delete all survey
    app.delete('/api/survey/all/delete', survey.deleteAll);
};
