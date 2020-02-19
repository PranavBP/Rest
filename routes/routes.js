const express = require('express');
const router = express();

const bodyparser = require('body-parser');
router.use(bodyparser.json());

const itemService = require('../service/service.js');

router.get('/api/items', itemService.getAllItems);

router.post('/api/items', itemService.addItem);

module.exports = router;