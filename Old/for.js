// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }

// for(let i = 0; i <= 10; i+=2){
//     console.log(i)
// }

// console.log(Math.floor(Math.random()*100))

function randomNumber(){
    let number = Math.floor(Math.random()*100);
    return number;
}

let myNumber = randomNumber();

console.log(myNumber)

function response(input){
    if(input == "Hello"){
        return "Hi"
    }else if(input == "Goodbye"){
        return "See ya later"
    }
}

console.log(response("Goodbye"));

let sum = 0;

for(let i = 0; i < 10; i++){
    let rng = randomNumber();
    sum += rng;
    console.log("SUM = " + sum)
}

console.log(sum)