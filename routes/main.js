const express = require('express')
const router = express.Router();
const utils = require('../resources/utils')
const main = require('../controllers/MainController')
const users = require('../controllers/UsersController')
const post = require('../controllers/PostsController')
const auth = require('../middleware/authenticate')

//Rutas
//MainController
router.get('/index',main.getIndex)
router.get('/post',main.getPost)

//UsersController
router.get('/testmysql',auth.authenticate,users.testMysql)
router.post('/createuser',users.createUser)
router.post('/getuserbyid',auth.authenticate,users.getUserById)
router.post('/login',users.setLogin)
router.get('/avatar',users.getAvatar)
//post controller
router.post('/userPost',auth.authenticate,post.userPost)
router.post('/postComment',auth.authenticate,post.postComment)

module.exports = router;