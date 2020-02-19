const Sequelize = require("sequelize");

const sequelize = new Sequelize('restful_db', 'root', 'pranav', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
