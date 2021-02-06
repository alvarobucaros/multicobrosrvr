const express = require('express');
const router = express.Router();

const controller = require('../controller/usuarioController');

router.get('/', controller.inicio);
router.post('/usuadd', controller.insertUser);

module.exports = router;