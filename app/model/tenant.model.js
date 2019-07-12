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
            type: Sequelize.INTEGER
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
        'createdAt': {
            type: Sequelize.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        },
        'updatedAt': {
            type: Sequelize.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
        }
    });

    return Tenant;
}
