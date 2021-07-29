var express = require("express");
var router = express.Router();

const dummyData = {
    email:"prasad121992@gmail.com",
    password:"123456"
}

router.post("/login",(req,res)=>{
    if(req.body.email == dummyData.email && req.body.password == dummyData.password ){
        req.session.email = req.body.email;
        res.redirect("/route/dashboard");
    }
    else{
        res.end("invalid username or password")
    }
})

router.get("/dashboard",(req,res)=>{
    if(req.session.email){
        res.render("dashboard",{ email:`${req.session.email}` });
    }
    else{
        res.end("invalid username or password")
    }
})

router.get("/logout",(req,res)=>{
    req.session.destroy(err => {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.render("login",{ logout:`logout successfully` });            
        }
    })
})

module.exports = router;