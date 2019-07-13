module.exports = (sequelize, Sequelize) => {

    const Tenant = sequelize.define('tenant', {
        Name: {
            type: Sequelize.STRING
        },
        Address: {
            type: Sequelize.TEXT
        },
        Logo: {
            type: Sequelize.STRING
        },
        ContactNo: {
            type: Sequelize.STRING
        },
        IsActive: {
            type: Sequelize.BOOLEAN
        },
        CreatedBy: {
            type: Sequelize.INTEGER
        },
        UpdatedBy: {
            type: Sequelize.INTEGER
        },
        ValidTill: {
            type: Sequelize.DATE
        },
        Theme: {
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

    return Tenant;
};
