
// const forbidden = require('./resources/forbidden');
const forbidden = [
    "parseInt",
    "document.write",
    "eval",
    "isNaN",
    "unescape",
    "escape",
    "parseFloat",
    "parseInt",
    "eval",
    "isNaN",
    "onload",
    "alert",
    "script",
    "<",
    ">",
    "onload",
    "=",
    "(",
    ")",
    '"'

]
const express = require('express')
const app = express()
es6Renderer = require('express-es6-template-engine')

reemplazarTodos = (palabra,reemplazar) =>{

    while(palabra.includes(reemplazar)){
        console.log(`Se ha reemplazado ${reemplazar} en ${palabra}`)
        palabra = palabra.replace(reemplazar,'')
    }
    return palabra
}

limpiarRequest = (data) =>{
    
    forbidden.forEach(word => {
        var usuario = data.usuario
        var password = data.password 
        usuario = reemplazarTodos(usuario,word)
        password = reemplazarTodos(password,word)
        data = {
            usuario,
            password
        }
    })
    return data
    
}

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(express.json());
app.use(express.urlencoded())
//Rutas
app.get('/index',(request , response)=>{
    response.render('index');
})
app.post('/login',(request , response)=>{
    const toSend = limpiarRequest({
        usuario: request.body.usuario,
        password: request.body.password
    })
    console.log( toSend)
    response.render('login',{
                                locals: toSend
                            });
})
//server listen
app.listen(3000,() =>{
    console.log('Escuchando en el puerto 3000')
})