module.exports = (sequelize, Sequelize) => {

    const Tenant = sequelize.define('customer', {
        Name: {
            type: Sequelize.STRING
        },
        Address: {
            type: Sequelize.STRING
        },
        Logo: {
            type: Sequelize.STRING
        },
        ContactNo: {
            type: Sequelize.INTEGER
        },
        IsActive: {
            type: Sequelize.INTEGER
        },
        CreatedBy: {
            type: Sequelize.INTEGER
        }
    });

    return Tenant;
}
