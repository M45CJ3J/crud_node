const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
dotenv.config({path:'config.env'})
const PORT = process.env.PORT|| 8080 

const connectdb = require('./server/database/connection');
const { mongo } = require('mongoose');
app.use(morgan('tiny'));
connectdb();
app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname))

app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.use('/',require('./server/routes/router'))
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
});
