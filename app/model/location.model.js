module.exports = (sequelize, Sequelize) => {

    const Location = sequelize.define('location', {
        Name: {
            type: Sequelize.STRING
        },
        TenantId: {
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

    return Location;
};
