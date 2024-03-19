console.log(5);
console.log(10)
console.log(20)

console.log("Hello")

// Primitive Datatypes 

// Integer
5
10
45
1000000
7

// Float
5.5
4.1
2.2564
8.52

// String
"Hello World"
'Hello World'
"0000000120"

// Booleans
true
false

// Misc Datatypes
undefined
null
NaN

// Variables

let num1 = 5;

console.log(num1);

console.log(num1 + 10);

let num2 = 15;

console.log(num1 + num2);

num1 = 50;

console.log(num1);

num1 = num1 + 10;

console.log(num1);

num1 += 10;

console.log(num1);

let myString = "Hello";

console.log(myString);

console.log(myString + " World");

console.log(myString, "World");

console.log(5.52 + 10);

console.log(myString + 5);

let hello1 = false;

console.log(hello1)

for(let i = 0; i <= 50; i++){
    console.log(i)
}

let sum = 0;

for(let i = 0; i <= 10; i++){
    sum = sum + 10;
}

console.log(sum);

for(let i = 10; i >= 0; i--){
    console.log(i)
}



let money = 10;

for(let i = 0; i < 2; i++){
    console.log(money)
}

// Non primitive datatypes;

// Arrays;

[10, 45, 7, 62];

["hello", "world"];

[55, "Hello", true, 52.2];

let myArr = [10, 5, 25, 90];

console.log(myArr);

console.log(myArr[1]);

console.log(myArr[0]);

for(let i = 0; i < myArr.length; i++){
    console.log(myArr[i])
}

console.log("");

let stringArray = ["Howdy", "how", "are", "you"];

console.log(stringArray)

console.log(stringArray[3])

console.log(stringArray[0])
console.log(stringArray[1])
console.log(stringArray[2])
console.log(stringArray[3])

console.log(stringArray.length)

for(let i = 0; i < stringArray.length; i++){
    console.log("I =", i)
    console.log(stringArray[i])
}

let newArray = ["one", "two", "three"];

console.log(newArray)

newArray.push("four");

console.log(newArray)

newArray.push("five");

console.log(newArray)

newArray.pop();

console.log(newArray)

// Objects

let myObj = {
    key:"value",
    money: 50,
    name: "Carter",
    location: {
        province:"ontario",
        city:"oshawa"
    }
}



console.log(myObj)

console.log(myObj.money)

console.log(myObj.name)

console.log(myObj.location.province)

let arrArr = [[1,2,3], ["one","two","three"]]

console.log(arrArr)

console.log(arrArr[1][1])

let objArr = [{"name":"jimbo","money":4},{"name":"sarsha","money":12}];

console.log(objArr)

console.log(objArr[0].name)

let arrObj = {
    "title":"arrayObject",
    theArray:[5,6,7]
}

console.log(arrObj)

console.log(arrObj.theArray[2])

console.log(myObj["money"])

let getKey = "name";

console.log(myObj[getKey])

let i = 0;

while(i < 5){
    i++
    console.log("while", i)
}

