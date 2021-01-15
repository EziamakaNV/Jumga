'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class merchandise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // merchandise.belongsTo(models.sellers);
    }
  };
  merchandise.init({
    name: {type:DataTypes.STRING,
      allowNull:false},
    numberInStock: {type:DataTypes.INTEGER,
      allowNull:false},
    seller: {type:DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'sellers',
        key: 'id'
      }
    },
    amountInNaira: {type:DataTypes.DOUBLE,
      allowNull:false},
    amountInCedi: {type:DataTypes.DOUBLE,
      allowNull:false},
    amountInKenyanShilling: {type: DataTypes.DOUBLE,
      allowNull:false},
    amountInPounds: {type:DataTypes.DOUBLE,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'merchandise',
  });
  return merchandise;
};