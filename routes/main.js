const express = require('express')
const router = express.Router();
const utils = require('../resources/utils')
const main = require('../controllers/MainController')

//Rutas
router.get('/index',main.getIndex)
router.post('/login',main.setLogin)

module.exports = router;