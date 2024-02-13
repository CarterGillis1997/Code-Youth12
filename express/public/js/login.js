const submit = document.querySelector("#submit");

submit.addEventListener("click",(event)=>{
    event.preventDefault();

    const data = {
        uName: document.querySelector("#uName").value,
        pWord: document.querySelector("#pWord").value
    }

    fetch("http://localhost:4545/submit", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response => response = response.json())
    .then(resp=>{
        console.log(resp)
    })
})