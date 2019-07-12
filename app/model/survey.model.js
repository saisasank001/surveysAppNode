module.exports = (sequelize, Sequelize) => {

    const Survey = sequelize.define('customer', {
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

    return Survey;
}
