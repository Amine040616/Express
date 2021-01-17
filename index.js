var express = require('express');
var path = require('path');
var app = express();

var port = 4000;

const Lioum = new Date();
const jour = Lioum.getDay();
const heur = Lioum.getHours();

function textTime(req, res,next){
    if (jour>0 && 9<heur && heur<17){
        next();
    }else{
        //app.use(express.static((__dirname + '/publico/style/style.css')));
        res.sendFile(__dirname + '/publico/error.html')
    }
} 
app.use(textTime); 
app.use('/', express.static(path.join(__dirname,'/publico')));


//app.use('/', express.static( __dirname + '/publico' ));
/* app.get('/', (req, res) => {
    res.sendFile(__dirname + '/publico/style/style.css')
    res.sendFile(__dirname + '/publico/home.html')
    //res.send('Mouch Hello World');
});  */ 

app.listen(port, ()=>{
    //console.log("Please visit localhost :", port)
    console.log("Le jour est : ", jour, ", l'heur est : ", heur, " , Please visit localhost :", port)
})