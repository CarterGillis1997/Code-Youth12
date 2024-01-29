let myObj = {
    id:13,
    name:"Carter",
    loggedIn:true
}

console.log(myObj)

console.log(myObj.id)
console.log(myObj.name)
console.log(myObj.loggedIn)

console.log(myObj["name"])

let getKey = "id";

console.log(myObj[getKey])

let mixObj = {
    array:[5,4,6,2],
    title:"MyObject"
}

console.log(mixObj)

let objArr = [
    {
        name:"object1",
        id:0
    },
    {
        name:"object2",
        id:1
    }
]

console.log(objArr)

console.log(objArr[0].name)

let objObj = {
    location:{
        city:"Toronto",
        province:"Ontario"
    },
    name:"Carter"
}

console.log(objObj)

console.log(objObj.location.city)

let myObj2 = {
    id:13,
    name:"Carter",
    loggedIn:true
}
console.log("")
let myKeys = Object.keys(myObj2)
for(let i = 0; i < myKeys.length; i++){
    console.log(myObj2[myKeys[i]])
}


