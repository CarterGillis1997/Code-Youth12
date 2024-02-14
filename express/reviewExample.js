const express = require('express');
const app = express();
const fs = require("fs");
const port = 4474;

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());

app.get("/",(req, res)=>{
    
})

app.listen(port,()=>{
console.log('Server live at port:', port);
})