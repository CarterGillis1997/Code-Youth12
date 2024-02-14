const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const port = 7587;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

fs.stat(__dirname + `/index.js`, (error, stats)=>{
    if(error){
        throw error;
    }

    console.log(stats)
})

app.get("/",async (req, res)=>{
    // const employees = await getEmployees();
    // console.log(employees)

    // let employees = fs.readFileSync("./database.json");
    // employees = JSON.parse(employees)
    // console.log(employees)
    
    // fs.readFile("./database.json", (error, results)=>{
    //     if(error){
    //         throw error;
    //     }

    //     results = JSON.parse(results);

    //     res.render("fileSystem", {data:results});
    // })

    res.render("fileSystem");

})

app.get("/directory", (req, res)=>{
    fs.readdir('./views', (error, files)=>{
        if(error){
            throw error;
        }

        console.log(files);

        res.end();
    })
})


app.post("/submitEmployee",async (req, res)=>{

    const database = await getEmployees();

    database.push(req.body)

    // After writing to the file, format it.
    const worked = await writeFile("database.json", database);

    console.log(worked)

    res.end()
})


app.listen(port, ()=>{
    console.log("Server live at port:" + port)
});

async function getEmployees(){
    return new Promise((resolve, reject)=>{
        fs.readFile("./database.json", (error, results)=>{
            if(error){
                reject(error)
            }
    
            results = JSON.parse(results);
            resolve(results);
        })
    })
}
async function writeFile(file, data){
    return new Promise((resolve, reject)=>{
        fs.writeFile(__dirname + `/${file}`, JSON.stringify(data), (error)=>{
            if(error){
                reject(error);
            }

            resolve(true);
        })
    })
}
