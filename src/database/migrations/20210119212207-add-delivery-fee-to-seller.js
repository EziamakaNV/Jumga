'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn( 'sellers', 'deliveryFee', Sequelize.DOUBLE );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn( 'sellers', 'deliveryFee' );
  }
};
