// Get elements by

// let hello = document.getElementById("hello");

// console.log(hello)

// let bye = document.getElementsByClassName("bye");

// console.log(bye)

// let buttons = document.getElementsByTagName("button")

// console.log(buttons)

// // QuerySelector

// let qHello = document.querySelector("#hello")

// console.log(qHello)

// let qBye = document.querySelectorAll(".bye")

// console.log(qBye)

// let tag = document.querySelectorAll("button")

// console.log(tag)


// Style

let hello = document.querySelector("#hello");

// document.querySelector("#hello").style.color = "red"

// hello.style.color = "red"
// hello.style.backgroundColor = "blue"
// hello.style.fontSize = "50px"

hello.setAttribute("style", "color:red;background-color:blue;font-size:50px;")

let buttons = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++){
    buttons[i].style.color = "red"
}

let bye = document.querySelectorAll(".bye");

bye[0].innerText = 'Wow'

bye[1].innerHTML = "<a href='https://google.com'>Google</a>"

let googleLink = document.querySelector("#google")

googleLink.href = 'google.com'

googleLink.title = "Hello";


// Creating and appending

let myDiv = document.createElement("div");

myDiv.style = 'color:red;background-color:blue;width:100px;height:100px;'

myDiv.classList.add("myDiv")

document.body.appendChild(myDiv)

let parent = document.querySelector("#parent");

parent.appendChild(bye[0])

let click = document.querySelector("#click");
let font = 10;

click.addEventListener("click", function(){
    bye[0].style.fontSize = font + "px";
    font += 10
    console.log("FONT SIZE:" + font + "px")
})

