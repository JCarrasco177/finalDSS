const express = require('express')
const app = express()

//Rutas
app.get('/hola',(request , response)=>{
    response.send('Hello  wolrd!!!')
})

app.post('/getName',(request , response)=>{
    response.json({
        nombre: "Antonio Salinas",
        direccion: "Mi Casa 3344",
        ciudad: "Valparaíso"
    })
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