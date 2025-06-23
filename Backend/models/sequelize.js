const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('placement_db', 'krishna', 'Krishna@2004', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
