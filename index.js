const utils = require('./resources/utils');
const express = require('express')
const app = express()
es6Renderer = require('express-es6-template-engine')
const router = require('./routes/main');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(express.json());
//server listen
app.listen(3000,() =>{
    console.log('Escuchando en el puerto 3000')
})