const express = require('express');
const app = express();
const port = 4444;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req, res)=>{
    res.send("hello")
})

app.get("/adminLogin", (req, res)=>{
    res.render("login")
})

app.post("/admin", checkKey, (req, res)=>{
    res.render("admin")
})

app.listen(port,()=>{
    console.log('Server live at port:', port);
})

function checkKey(req, res, next){
    // Check if entered password is correct
    if(req.body.password == "123abc"){
        // Continue to the callback function
        next();
    }else{
        // Send Error if wrong password
        res.status(401).send("Bad Password")
    }
}