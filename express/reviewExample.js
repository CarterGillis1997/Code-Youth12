const express = require('express');
const app = express();
const fs = require("fs");
const port = 4474;

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());

app.get("/",async (req, res)=>{
    const reviews = await getFile("reviews.json");
    

    res.render("homepage", {data: reviews})
})

app.get("/review",(req, res)=>{

    res.render("review")
})

app.post("/redirect",async(req, res)=>{
    const reviews = await getFile('./reviews.json');
    console.log(reviews)
    reviews.unshift(req.body)
    const failed = await write('reviews.json', reviews);
    if(!failed){
        console.log("Write Success");
        res.redirect("/");
    }else{
        res.redirect("/")
    }
})

app.listen(port,()=>{
console.log('Server live at port:', port);
})

async function getFile(file){
    return new Promise((resolve, reject)=>{
        fs.readFile(file, (error, results)=>{
            if(error){
                console.log(error);
                resolve(true)
            }

            results = JSON.parse(results);
            resolve(results)
        })
    })
}

async function write(file, data){
    return new Promise((resolve, reject)=>{
        fs.writeFile(__dirname + `/${file}`, JSON.stringify(data), (error)=>{
            if(error){
                reject(error);
            }
    
            resolve(false)
        })
    })
}