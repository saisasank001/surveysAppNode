module.exports = (sequelize, Sequelize) => {

    const Location = sequelize.define('finalResponse', {
        categoryID: {
            type: Sequelize.INTEGER
        },
        surveyId: {
            type: Sequelize.INTEGER
        },
        FinalSubmit_DynamicForm: {
            type: Sequelize.TEXT
        },
        Location:{
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        formTitle: {
            type: Sequelize.STRING
        },
        name:{
            type: Sequelize.STRING
        },
        'createdAt': {
            type: Sequelize.DATE(3),
            defaultValue: sequelize.NOW,
        },
        'updatedAt': {
            type: Sequelize.DATE(3),
            defaultValue: sequelize.NOW,
        }
    });

    return Location;
};
