let data;

async function init(){
    data = await getData();
    stuff()

}
init()

function stuff(){
    console.log(data)
    if(data == false){
        console.log("error")
    }
}

async function getData(){
    return new Promise(function(resolve, reject){
        fetch("./database2.json")
        .then(response => response.json())
        .then(hello => {
            console.log("Fetched")
            resolve(hello)
        })
        .catch(function (error){
            resolve(false)
        })
    })
}

function errorFunction(){
    let five = 5;
    try{
        if(five !== 10){
            throw "not ten"
        }
    }
    catch(error){
        console.log(error)
    }
}
errorFunction()