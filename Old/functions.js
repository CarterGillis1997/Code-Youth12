function hello(){
    console.log("Howdy")
    console.log("Hello")
    console.log("Hi")
}


hello()


function myFunction(num1, num2, num3){

    console.log("My function is running")

    console.log(num1)
    console.log(num2)
    console.log(num3)
}

myFunction(5, 50)

undefined
null
NaN


function lessThan(theNumber){
    console.log(theNumber + " is Less Than")
}
function greaterThan(theNumber){
    console.log(theNumber + " is Greater Than")
}

let num = 50

if(num < 10){
    lessThan(num);
}else if(num > 10){
    greaterThan(num);
}