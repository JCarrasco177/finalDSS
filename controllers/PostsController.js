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
                message = "'Hubo un error al insertar el post'"
            }else{
                message = "'Se ha insertado exitosamente!!!!'"
            }

        }
    );
    var user = {}
    connection.query(
        'select * from users where id ='+request.body.user_id,
        function(err, results, fields) {
            if (err) {
                user = {}
            }else{
                user = results[0]
            }

        }
    );
    var posts=[]
    connection.query(
        'select * from posts',
        function(err, results, fields) {
            if (err) {
                posts = []
            }else{
                posts = results
            }

        }
    );
    response.render('posts',{locals:{message,user,posts}})
 
}
const post = (request,response) =>{
    //{locals:{user,posts}},
    console.log('llegamos aca')
}  

module.exports = {
    setPost,
    post,
}