module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define('users', {
        Name: {
            type: Sequelize.STRING
        },
        Username: {
            type: Sequelize.STRING
        },
        Password: {
            type: Sequelize.STRING
        },
        TenantId: {
            type: Sequelize.INTEGER
        },
        RoleId: {
            type: Sequelize.INTEGER
        },
        CreatedBy: {
            type: Sequelize.INTEGER
        },
        UpdatedBy: {
            type: Sequelize.INTEGER
        },
        Locations: {
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

    return User;
};
