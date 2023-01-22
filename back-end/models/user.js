'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  

  User.init({
    userId: {
      type: DataTypes.SERIAL,
      primaryKey: true,
      autoIncrement: true

    },
    email: { 
        type: DataTypes.STRING,
        primaryKey: true, 
    },
    username: { 
        type: DataTypes.STRING,
        primaryKey: true, 
    },
    passwordDigest:{ 
        type: DataTypes.STRING,
        primaryKey: true, 
    },
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
  });
  return User
};