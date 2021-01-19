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
    }
  }, {
    sequelize,
    modelName: 'seller',
  });
  return seller;
};