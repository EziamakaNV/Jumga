'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seller extends Model {
    
    static associate(models) {
    }
  };
  seller.init({
    name: {
      type: DataTypes.STRING,
      allowNull: null,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: null,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    deliveryFee: {
      type: DataTypes.DOUBLE,
      defaultValue: 150
    },
  }, {
    sequelize,
    modelName: 'seller',
  });
  return seller;
};