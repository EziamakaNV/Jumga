'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sellerDispatches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dispatchRider: {
        type: Sequelize.INTEGER,
        references: {
          model: 'dispatchRiders',
          key: 'id'
        }
      },
      seller: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sellers',
          key: 'id'
        }
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
    await queryInterface.dropTable('sellerDispatches');
  }
};