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
        }
        // active: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // }
    });

    return Category;
}
