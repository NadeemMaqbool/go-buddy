const Sequelize = require("sequelize");

module.exports = sequelize.define("country",{
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    short_name: Sequelize.STRING(30),
    long_name: Sequelize.STRING(50),
    continent: Sequelize.STRING(30),
});
