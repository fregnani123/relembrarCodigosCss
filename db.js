const Sequelize = require('sequelize');

const sequelize = new Sequelize('produtos','root','Freg_1308',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
})

module.exports = sequelize; 