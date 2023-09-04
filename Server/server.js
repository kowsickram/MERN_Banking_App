const express = require('express');
const mongoose  = require('mongoose');


const app = express();
const port = 4000

app.listen((req,res)=>{
 console.log(`Server Listening To Port ${port}`)
})