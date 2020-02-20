const express = require("express");
const router = express();

const bodyparser = require("body-parser");
router.use(bodyparser.json());

const Item = require("../models/item.js");

const getAllItems = (req, res) => {
    Item.findAll().then(items => res.json(items));
};

const getItemById = (req, res) => {
    Item.findByPk(req.params.id).then(item => res.json(item));
};

const addItem = (req, res) => {
    Item.create(req.body).then(item => res.json(item));
};

const updateItem = (req, res) => {
    Item.update({
        name: req.body.name,
        price: req.body.price
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(result => res.json(result));
};

const deleteItem = (req, res) => {
    Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => res.json(result));
};

module.exports = {
  getAllItems: getAllItems,
  getItemById: getItemById,
  addItem: addItem,
  updateItem: updateItem,
  deleteItem: deleteItem
};
