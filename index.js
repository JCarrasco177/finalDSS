const express = require('express')
const app = express()
es6Renderer = require('express-es6-template-engine'),


app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

//Rutas
app.get('/index',(request , response)=>{
    response.render('index');
})


app.post('/getFullName',(request , response)=>{
    response.json({
        nombre: "Antonio Javier Salinas Rodríguez",
        direccion: "Mi Casa 3344",
        ciudad: "Valparaíso"
    })
})

//server listen
app.listen(3000,() =>{
    console.log('Escuchando en el puerto 3000')
})