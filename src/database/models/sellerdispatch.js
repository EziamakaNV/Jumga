'use strict';
const {
  Model
} = require('sequelize');
const seller = require('./seller');
module.exports = (sequelize, DataTypes) => {
  class sellerDispatch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sellerDispatch.belongsTo(models.dispatchRiders);
      sellerDispatch.belongsTo(models.sellers);
    }
  };
  sellerDispatch.init({
    dispatchRider: {type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dispatchRiders',
        key: 'id'
      }
    },
    seller: {type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sellers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'sellerDispatch',
  });
  return sellerDispatch;
};