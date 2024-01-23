/*
Strings
Integers
Floats
Boolean

undefined
null
NaN
*/

// Arrays

let myArr = [5,2,4,1];

console.log(myArr)

console.log(myArr[1])

console.log(myArr[0])
console.log(myArr[3])

console.log(myArr[5])

let mixArr = ["Hello",4,undefined,true,5.5]

let nestedArr = [[5,7,8,2],[9,5,5,4]]

console.log(nestedArr)

console.log(nestedArr[0][2])

let loopArray = [5,4,8,6,1,3,4,7,5,1,2,4,5,4,1];
let loopArray2 = ["hello", "world", "wow"];

let sum2 = 0
for(let i = 0; i < loopArray.length; i++){
    console.log(loopArray[i])
    sum2 += loopArray[1]
}
console.log(sum2)

for(let i = 0; i < loopArray2.length; i++){
    console.log(loopArray2[i])
}

let newArr = [1,2,3];

console.log(newArr)

newArr.push(4)

console.log(newArr)

newArr.push(5,6,7,8,9)

console.log(newArr)

let poppedElement = newArr.pop()
console.log(poppedElement)

console.log(newArr)

console.log(newArr.slice(2, 5))

console.log(newArr)

newArr.splice(2, 3)

console.log(newArr)