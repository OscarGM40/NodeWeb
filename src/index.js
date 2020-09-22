/*lo primero sera instalar desde npm express, ejs, morgan, nodemon */
const express = require('express');

const app = new express();
const path = require('path') //path es del core

//------------SETTINGS DEL SERVER
//podemos fijar variables del mismo ambito que la instancia app
//con el metodo set para lo que necesitemos
app.set('port', process.env.PORT || 3000);

//app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'))

//rutas
app.use(require('./routes/routingFile'));

//------STATIC FILES-----
app.use(express.static(path.join(__dirname,'public')))




//si el servicio en la nube me da un puerto definido hay que cambiarlo asin
app.listen(app.get('port'),()=>{
    console.log(`server on ${app.get('port')}`);
});