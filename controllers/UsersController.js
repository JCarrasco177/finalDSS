const connection = require('../config/db')
const utils = require('../resources/utils')

const testMysql = (request,response) =>{
    connection.query(
        'SELECT * FROM users',
        function(err, results, fields) {
            response.json(results[1])
        }
      );
      connection.end()
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
      connection.end()
}
const getUserById = (request,response)=>{
    connection.query(
        'SELECT * FROM users where id ='+request.body.id,
        function(err, results, fields) {
            response.json(results)
        }
      );
      connection.end()
}
module.exports = { testMysql,
                   createUser,
                   getUserById,
                 }