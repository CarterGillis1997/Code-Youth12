const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 4545;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

const data = [
    {
        "name":"Sarsha Warsha",
        "salary": 4501542
    },
    {
        "name":"Jurimo Datatag",
        "salary":4
    }
]

// GET

app.get("/", function(req, res){
    res.render("header")
})

app.get("/about", (req, res)=>{
    res.send("hello")
});

app.get("/about/hello", (req, res)=>{
    res.send("howdy")
});

app.get("/user/:type", (req, res)=>{

    console.log(req.params)
    console.log(req.query)

    if(req.params.type == "login"){
        if(req.query.error){
            res.render("login",{error:"bad username"})
        }else{
            res.render("login")
        }
        
    }else if(req.params.type == "signup"){
        res.render("signup")
    }else{
        res.redirect("/")
    }
});

app.get("/allEmployees",(req, res)=>{
    res.json(data);
})

app.get("/elevation",async (req, res)=>{

    const elevation = await getApi();

    res.render("elevation", {data:elevation});
})

// POST
const loginInfo = {
    username:"www",
    password:"www"
}
app.post("/submit", (req, res)=>{
    // if(req.body.username == loginInfo.username){
    //     if(req.body.password == loginInfo.password){
    //         res.redirect("/");
    //     }
    // }else{
    //     res.redirect("/user/login?error=Bad_Username")
    // }


    console.log(req.body);
    
    const response = {
        message:"Hello",
        status:200
    }

    res.json(response)
})

app.post("/action", (req, res)=>{
    res.end();
})



app.listen(4545, function(){
    console.log("Server is live at port: " + port)
})

async function getApi(){
    return new Promise((resolve, reject)=>{
        fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
        .then(response => response.json())
        .then(resp =>{
            resolve(resp)
        });
    })
}