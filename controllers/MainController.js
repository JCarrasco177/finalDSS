const utils = require('../resources/utils')

const getIndex = (request,response) =>{
    response.render('index');
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

module.exports = {
    getIndex,
    setLogin,
}