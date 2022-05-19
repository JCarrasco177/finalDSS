const utils = require('../resources/utils')
const moment = require('moment')
const connection = require('../config/db')
var usr 
var msg
var pst 
const userPost = (request,response) => {
 
  const user_id = request.body.user_id

  connection.query(
    `SELECT * FROM users 
     join posts on (users.id = posts.user_id)
    where users.id = ${user_id}`,
    function(err, result, fields) {
      if (err) {console.log(err)}
        response.json(result)
    }
  );
}

module.exports = {
  userPost,
}