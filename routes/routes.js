const express = require('express');
const router = express();

const bodyparser = require('body-parser');
router.use(bodyparser.json());

const itemService = require('../service/service.js');

router.get('/api/items', itemService.getAllItems);

router.get('/api/items/:id', itemService.getItemById);

router.post('/api/items', itemService.addItem);

router.put('/api/items/:id', itemService.updateItem);

router.delete('/api/items/:id', itemService.deleteItem);

module.exports = router;