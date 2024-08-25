'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CattleHerd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CattleHerd.init({
    cattle_herd_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'CattleHerd',
    tableName: 'cattleHerds',
    timestamps: false
  });
  return CattleHerd;
};