'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sellerActivationPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // sellerActivationPayment.belongsTo(models.sellers);
    }
  };
  sellerActivationPayment.init({
    seller: {type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sellers',
        key: 'id'
      }
    },
    amountInDollar: {type: DataTypes.DOUBLE,
      allowNull: false},
      txn_reference: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
      },

  }, {
    sequelize,
    modelName: 'sellerActivationPayment',
  });
  return sellerActivationPayment;
};