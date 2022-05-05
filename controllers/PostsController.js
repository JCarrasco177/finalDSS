const utils = require('../resources/utils')
const moment = require('moment')
const connection = require('../config/db')

const setPost = (request,response) => {
    //comentario
    //user_id
    connection.query(
        'insert into posts (user_id,title,content) values ("'+request.body.user_id+'","'+request.body.title+'","'+request.body.content+'")',
        function(err, results, fields) {
            if (err) {
                response.json({message:"Ha ocurrido un error en la insercion "+err})
            }else{
                response.json({message:"Correcto!"})
            }

        }
      );
}

module.exports = {
    setPost,
}