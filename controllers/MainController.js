const utils = require('../resources/utils')

const getIndex = (request,response) =>{
    response.render('index');
}
const getPost = (request,response) =>{
    response.render('post');
}
const setLogin  = (request,response) =>{
    const toSend = utils.limpiarRequest({
        usuario: request.body.usuario,
        password: request.body.password
    })
    response.render('login',{
                                locals: toSend
                            });
}
const setPost = (request,response) =>{

}

module.exports = {
    getIndex,
    setLogin,
    getPost,
    setPost,
}