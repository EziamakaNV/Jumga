'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn( 'sellerActivationPayments', 'txn_reference', Sequelize.STRING );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn( 'sellerActivationPayments', 'txn_reference' );
  }
};
