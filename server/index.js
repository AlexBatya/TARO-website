
const express = require('express');
const path = require('path');


const app = express();
const port=3000;

const mainHtmlPort = path.resolve(__dirname,'../static/main.html');
const mainCssPort = path.resolve(__dirname,'../static/main.css');

// app.get('/',(req,res)=>{
//     res.sendFile(mainHtmlPort)
// })
// app.get('/',(req,res)=>{
//     res.sendFile(mainCssPort)
// })




app.listen(port);