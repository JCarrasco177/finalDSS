const utils = require('../resources/utils')
const moment = require('moment')
const connection = require('../config/db')
var usr 
var msg
var pst 
const getMessage = (request) =>{

   connection.promise().query('insert into posts (user_id,title,content) values ("'+request.body.user_id+'","'+request.body.title+'","'+request.body.content+'")')
  .then( ([rows,fields,err]) => {
    if (err) {
        msg = "'Hubo un error al insertar el post'"
    }else{
        msg = "'Se ha insertado exitosamente!!!!'"
    }
  }) 
  return msg
    
} 
const getUser = (request) =>{
    console.log('select * from users where id ='+request.body.user_id)
    connection.promise().query('select * from users where id ='+request.body.user_id)
    .then( ([rows,fields,err]) => {
      usr = rows[0]
      }
    )
    return usr
    
    
}

const getPosts = () =>{
    
    connection.promise().query('select *, date_format(date,"%d/%m/%Y %h:%I:%S") as fixedate from posts join users on posts.user_id = users.id')
    .then( ([rows,fields,err]) => {
      pst = rows
      }
    )
    return pst
    

}



const setPost =  async (request,response) => {

    const message = await getMessage(request)
    const posts = await getPosts(request)
    const user = await getUser(request)
    console.log({message,user,posts})
    response.render('post',{locals:{message,user,posts}})
}

const post = (request,response) =>{
    //{locals:{user,posts}},
    console.log('llegamos aca')
}  

module.exports = {
    setPost,
    post,
}