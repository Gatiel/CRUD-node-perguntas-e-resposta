const Sequelize = require('sequelize');

const connection = new Sequelize('database_name','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;