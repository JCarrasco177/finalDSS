const express = require('express')
const router = express.Router();
const utils = require('../resources/utils')
const main = require('../controllers/MainController')
const users = require('../controllers/UsersController')

//Rutas
//MainController
router.get('/index',main.getIndex)
router.get('/post',main.getPost)
router.post('/setpost',main.setPost)
//UsersController
router.get('/testmysql',users.testMysql)
router.post('/createuser',users.createUser)
router.post('/getuserbyid',users.getUserById)
router.post('/login',users.setLogin)

module.exports = router;