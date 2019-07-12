module.exports = (sequelize, Sequelize) => {

    const Role = sequelize.define('customer', {
        name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    return Role;
}
