const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config({ path: './config.env' });
require('./db/conn');
//const User = require('./model/userSchema');

app.use(express.json()); //the json file converted to oject show in postman video 8
app.use(cookieParser()) ;//for token comparison so that get to home page MERN#35


//we link the router files to make a route easy
app.use(require('./router/auth'));


//Final heroku deploy
const PORT = process.env.PORT  || 5000;


//Middleware
//const middleware = (req, res, next) => {
//    console.log('Hello my middle ware');  //check signup done untile then it loading on
//    next();
//}
//
//app.get('/', (req, res) => {
//    res.send('Hello world from the server');
//});


//app.get('/about',  (req, res) => {
//    res.send('Hello about world from the server');
//});

app.get('/contact', (req, res) => {
    res.cookie("Test",'mernaayus');
    res.send('Hello contact world from the server');
});

app.get('/signin', (req, res) => {
    res.send('Hello lpogin world from the server');
});

app.get('/signup', (req, res) => {
    res.send('Hello registration world from the server');
});



//3: step heroku

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}

//console.log("subscribe");

app.listen(PORT, () => {
    console.log(`server running at port no ${PORT}`);
})

