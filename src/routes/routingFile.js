const express = require('express');
const router = express.Router()


//------RUTAS
//de momento podemos devolver un html con sendFile()
//admite la ruta absoluta desde C:[tonteria] ,solo vale para mi eso 
//o ruta desde la raiz del proyecto: usar __dirname
router.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'))
    res.render('index',{title:'NodeJS WebSite'}); //podemos pasar un json 
    // hacia la ruta de respuesta si queremos
});

router.get('/contact',(req,res)=>{
res.render('contact',{title:'Contact Page'});
});

module.exports = router;