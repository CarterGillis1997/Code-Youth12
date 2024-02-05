let data;

fetch('./database.json')
.then(response => response.json())
.then(resp => {
    logData(resp)
    console.log(resp)
    data = resp;
})

console.log(data)

function logData(dataToLog){
    console.log(dataToLog);
}

fetch('https://api.rainviewer.com/public/weather-maps.json')
.then(response => {
    console.log(response)
    return response.json()
})
.then(resp =>{
    console.log(resp)
})


async function wait(){
    console.log("Waiting") 
    let response = await respond();
    console.log(response)
}

wait();

async function respond(){
    console.log("responding");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello")
        }, 5000)
    })
}