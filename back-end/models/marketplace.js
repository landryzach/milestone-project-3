'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  Marketplace.init({
    id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    mileage: DataTypes.INTEGER,
    pic: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    underscored: true,
    modelName: 'Markeplace',
  });
  return Marketplace;
};