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
        }
    });

    return Location;
}
