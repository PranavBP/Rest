const Sequelize = require("sequelize");

const sequelize = require("../config/db");

const Item = sequelize.define("items", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
});

module.exports = Item;
