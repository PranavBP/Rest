const express = require("express");
const router = express();

const bodyparser = require("body-parser");
router.use(bodyparser.json());

const item = require('../models/item.js');

const getAllItems = ((req,res) => {
    item.findAll().then(items => res.json(items))
});

const getItemById = ((req,res) => {
    item.findByPk(req.params.id).then((item) => res.json(item))
});

const addItem = ((req,res) => {
    item.create(req.body).then(item => res.json(item))
});

const updateItem = ((req,res) => {
    item.update({
        name: req.body.name,
        price: req.body.price
    },
    {
        where: {
            id: req.params.id
        }
    }).then(result => res.json(result))
});

const deleteItem = ((req,res) => {
    item.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result))
});

module.exports = {
    getAllItems: getAllItems,
    getItemById: getItemById,
    addItem: addItem,
    updateItem: updateItem,
    deleteItem: deleteItem
};