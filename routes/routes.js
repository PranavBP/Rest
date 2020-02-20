const express = require('express');
const router = express();

const bodyparser = require('body-parser');
router.use(bodyparser.json());

const itemService = require('../controllers/controller.js');

router.get('/items', itemService.getAllItems);

router.get('/items/:id', itemService.getItemById);

router.post('/items', itemService.addItem);

router.put('/items/:id', itemService.updateItem);

router.delete('/items/:id', itemService.deleteItem);

module.exports = router;