const buttons = document.querySelectorAll(".numberButtons");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function(event){
        console.log(event.target.innerText)
    })
}

const fourButton = document.querySelectorAll("button")[3]

fourButton.addEventListener("click", function(){
    console.log(fourButton.innerText)
})

const box = document.querySelector(".box")

// document.body.addEventListener("mousemove",function (event){
//     const x = event.clientX;
//     const y = event.clientY;
    
//     box.style.top = y + 'px'
//     box.style.left = x + 'px'
// })

box.addEventListener("mouseenter", randomColor)

box.addEventListener("click",function (){
    box.removeEventListener("mouseenter", randomColor)
})

function randomColor(){
    const rgb = "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")"
    box.style.backgroundColor = rgb;
}