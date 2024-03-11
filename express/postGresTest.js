const express = require('express');
const app = express();
const db = require("./pgFunction.js");
const port = 7897;

// select();
// selectCondition("id", "<", "3");
selectCol("name");
insertInto([11, 'Derek']);


app.listen(port,()=>{
console.log('Server live at port:', port);
})

async function select(){
    const result = await db.query('SELECT * FROM testtable');
    console.log(result.rows)
}

// async function selectCondition(colName, condition, value){
//     const result = await db.query('SELECT * FROM testtable WHERE $1 $2 $3', [colName, condition, value])
//     console.log(result)
// }

async function selectCol(colName){
    const result = await db.query(`SELECT ${colName} FROM testtable`);
    console.log(result.rows)
}

async function insertInto(values){
    db.query(`INSERT INTO testtable(id, name) VALUES(${values[0]}, '${values[1]}')`)
}