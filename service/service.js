const express = require("express");
const router = express();

const bodyparser = require("body-parser");
router.use(bodyparser.json());

const item = require('../models/item.js');

const getAllItems = ((req,res) => {
    item.findAll().then(items => res.json(items))
});

const addItem = ((req,res) => {
    item.create(req.body).then(item => res.json(item))
});

module.exports = {
    getAllItems: getAllItems,
    addItem: addItem
};