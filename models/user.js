const { sequelize, DataTypes } = require('sequelize');


const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING
  },
  role:{
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
  modelName : 'users'
});