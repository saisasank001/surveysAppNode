module.exports = (sequelize, Sequelize) => {

    const Category = sequelize.define('category', {
        Name: {
            type: Sequelize.STRING
        },
        TenantId: {
            type: Sequelize.INTEGER
        },
        UserId: {
            type: Sequelize.INTEGER
        },
        CreatedBy: {
            type: Sequelize.INTEGER
        },
        UpdatedBy: {
            type: Sequelize.INTEGER
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
    return Category;
};
