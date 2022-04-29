const utils = require('../resources/utils')
const moment = require('moment')

const getIndex = (request,response) =>{
    response.render('index');
}
var posts = [
    ]

const getPost = (request,response) =>{
    
    response.render('post',{locals:{posts}});
}

const setPost = (request,response) =>{
    posts.push({
        nombre: request.body.nombre,
        fecha:moment().format('D-M-Y hh:mm'),
        comentario:request.body.comentario,
        web: request.body.web,
        email: request.body.email,
    })
    
    response.render('post',{locals:{posts}});
}

module.exports = {
    getIndex,
    getPost,
    setPost,
}