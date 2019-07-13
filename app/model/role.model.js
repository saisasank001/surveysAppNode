module.exports = (sequelize, Sequelize) => {

    const Role = sequelize.define('role', {
        RoleName: {
            type: Sequelize.STRING
        },
        AccessIds: {
            type: Sequelize.STRING
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

    return Role;
};
