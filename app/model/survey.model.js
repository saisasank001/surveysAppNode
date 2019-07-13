module.exports = (sequelize, Sequelize) => {

    const Survey = sequelize.define('survey', {
        UserID: {
            type: Sequelize.STRING
        },
        Title: {
            type: Sequelize.STRING
        },
        CategoryId: {
            type: Sequelize.INTEGER
        },
        DynamicForm: {
            type: Sequelize.TEXT
        },
        ExpiresOn: {
            type: Sequelize.DATE
        },
        StartsOn: {
            type: Sequelize.DATE
        },
        CreatedBy: {
            type: Sequelize.INTEGER
        },
        UpdatedBy: {
            type: Sequelize.INTEGER
        },
        IsActive: {
            type: Sequelize.BOOLEAN
        },
        'createdAt': {
            type: Sequelize.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        },
        'updatedAt': {
            type: Sequelize.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
        }
    });

    return Survey;
};
