'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("countries", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      short_name: Sequelize.STRING(30),
      long_name: Sequelize.STRING(50),
      continent: Sequelize.STRING(30),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("countries")
  }
};
