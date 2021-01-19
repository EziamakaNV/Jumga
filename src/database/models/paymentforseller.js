'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paymentForSeller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // paymentForSeller.belongsTo(models.sellers);
    }
  };
  paymentForSeller.init({
    customer: { type:DataTypes.STRING,
    allowNull: false},
    amount: {type: DataTypes.DOUBLE,
      allowNull:false},
    seller: {type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sellers',
        key: 'id',
      }
    },
    currency: {type: DataTypes.STRING,
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
    modelName: 'paymentForSeller',
  });
  return paymentForSeller;
};