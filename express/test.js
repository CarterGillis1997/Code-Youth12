const express = require('express');
const app = express();
const port = 4444;
require("dotenv").config();

const ADMIN_KEY = process.env.ADMIN_KEY;

console.log(ADMIN_KEY)

app.listen(port,()=>{
console.log('Server live at port:', port);
})