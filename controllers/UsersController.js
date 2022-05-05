const connection = require('../config/db')
const utils = require('../resources/utils')
//const avatar = require('../resources/img/avatar')

const testMysql = (request,response) =>{
    connection.query(
        'SELECT * FROM users',
        function(err, results, fields) {
            response.json(results[1])
        }
      );

}
const createUser = (request,response)=>{
    connection.query(
        'insert into users values (DEFAULT,"'+request.body.name+'","'+request.body.lastName+'","'+utils.btoa(request.body.password)+'")',
        function(err, results, fields) {
            if (err) {
                response.json({message:"Ha ocurrido un error en la insercion "+err})
            }else{
                response.json({message:"Correcto!"})
            }

        }
      );
  
}
const getUserById = (request,response)=>{
  
    connection.query(
        'SELECT * FROM users where id ='+request.body.id,
        function(err, results, fields) {
            response.json(results)
        }
      );

}
const setLogin  = (request,response) =>{
    const usuario = utils.limpiarRequest({
        usuario: request.body.usuario,
        password: request.body.password
    })
    console.log('SELECT * FROM users where name ="'+usuario.usuario+'" and password = "'+utils.btoa(usuario.password)+'"')
    connection.query(
        'SELECT * FROM users where name ="'+usuario.usuario+'" and password = "'+utils.btoa(usuario.password)+'"',
        function(err, results, fields) {

            const posts = []
             if(results.length >0){
                const user = results[0]
                response.render('post',{locals:{user,posts}});
            }else{
                response.render('index',{
                    locals: {message:"'No existen coincidencias en la base de datos'"}
                });
            }
        }
      );

}
const getAvatar = (request,response) =>{
   // response.render(avatar)
}
module.exports = { testMysql,
                   createUser,
                   getUserById,
                   setLogin,
                   getAvatar,
                 }