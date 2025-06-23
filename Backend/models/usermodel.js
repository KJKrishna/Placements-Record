const { DataTypes } = require('sequelize');
// const sequelize = require('./index');
const sequelize = require('./sequelize');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  isStudent: { type: DataTypes.BOOLEAN, defaultValue: true }
});

module.exports = User;
