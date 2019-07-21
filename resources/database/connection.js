const Sequelize = require("sequelize");

const sequelize = new Sequelize("gobuddy_db", "postgres", "pass123", {
    host: "127.0.0.1",
    dialect: "postgres",
});

sequelize.authenticate()
.then(() => console.log("Database connection..OK"))
.catch(err => console.log("Err:"+ err));
module.exports = sequelize;
global.sequelize = sequelize;