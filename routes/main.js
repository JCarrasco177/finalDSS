const express = require('express')
const router = express.Router();
const utils = require('../resources/utils')
const main = require('../controllers/MainController')
const users = require('../controllers/UsersController')
const post = require('../controllers/PostsController')
const auth = require('../middleware/authenticate')
//rutas de index y post
router.get('/index',main.getIndex)
router.get('/post',main.getPost)


router.get('/testmysql',users.testMysql)
router.post('/createuser',users.createUser)
router.post('/getuserbyid',auth.authenticate,users.getUserById)
router.post('/login',users.setLogin)
router.get('/avatar',users.getAvatar)

router.post('/userPost',post.userPost)
router.post('/postComment',post.postComment)

module.exports = router;