'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('breakDowns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paymentForSeller: {
        type: Sequelize.INTEGER,
        references: {
          model: 'paymentForSellers',
          key: 'id',
        }
      },
      jumgaCommission: {
        type: Sequelize.DOUBLE
      },
      sellerProfit: {
        type: Sequelize.DOUBLE
      },
      dispatchRiderCommission: {
        type: Sequelize.DOUBLE
      },
      jumgaDeliveryCommission: {
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
    await queryInterface.dropTable('breakDowns');
  }
};