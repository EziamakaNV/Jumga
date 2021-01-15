'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('merchandises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      numberInStock: {
        type: Sequelize.INTEGER
      },
      seller: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sellers',
          key: 'id'
        }
      },
      amountInNaira: {
        type: Sequelize.DOUBLE
      },
      amountInCedi: {
        type: Sequelize.DOUBLE
      },
      amountInKenyanShilling: {
        type: Sequelize.DOUBLE
      },
      amountInPounds: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('merchandises');
  }
};