'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class breakDown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // breakDown.belongsTo(models.paymentForSellers);
    }
  };
  breakDown.init({
    paymentForSeller: {type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'paymentForSellers',
        key: 'id',
      }
    },
    jumgaCommission: {type: DataTypes.DOUBLE,
      allowNull: false},
    sellerProfit: {type: DataTypes.DOUBLE,
      allowNull: false,},
    dispatchRiderCommission: {type: DataTypes.DOUBLE,
      allowNull: false},
    jumgaDeliveryCommission: {type: DataTypes.DOUBLE,
      allowNull: false}
  }, {
    sequelize,
    modelName: 'breakDown',
  });
  return breakDown;
};