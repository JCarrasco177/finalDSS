const express = require('express')
const router = express.Router();
const utils = require('../resources/utils')
const main = require('../controllers/MainController')
const users = require('../controllers/UsersController')

//Rutas
router.get('/index',main.getIndex)
router.get('/post',main.getPost)
router.post('/login',main.setLogin)
router.post('/setpost',main.setPost)
router.get('/testmysql',users.testMysql)
router.post('/createuser',users.createUser)
router.post('/getuserbyid',users.getUserById)

module.exports = router;