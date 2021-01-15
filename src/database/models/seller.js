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
  }, {
    sequelize,
    modelName: 'seller',
  });
  return seller;
};