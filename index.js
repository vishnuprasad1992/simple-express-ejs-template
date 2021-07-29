//adding express server and parameters
const express = require("express");
const app= express();
const path = require("path");
const {v4:uuidv4}= require("uuid");
const session = require("express-session");
const router = require('./router');

//port 
const port = process.env.PORT || 5000;

//for rendering ejs template engine
app.set("view engine","ejs");

// adding body-parser to get html body inputs in json format
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//session
app.use(session({
    secret : uuidv4() ,
    resave:false,
    saveUninitialized: true
}));

// loading assets
app.use("/static",express.static(path.join(__dirname,"public")));

//router
app.use('/route',router);

//routes
app.get('/',(req,res)=>{
    res.render('login',{ title:"Login System" });
})

app.listen(port,()=> console.log('server started on http://localhost:5000'));