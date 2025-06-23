const { DataTypes } = require('sequelize');
// const sequelize = require('./index');
const sequelize = require('./sequelize');



const Student = sequelize.define('Student', {
  name: DataTypes.STRING,
  roll_no: DataTypes.STRING,
  age: DataTypes.INTEGER,
  year: DataTypes.INTEGER,
  company: DataTypes.STRING,
  salary: DataTypes.INTEGER,
  branch: DataTypes.STRING,
  gpa: DataTypes.FLOAT
});

module.exports = Student;
