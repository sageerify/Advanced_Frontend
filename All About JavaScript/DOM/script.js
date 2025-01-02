let getELementByIdExample = document.getElementById("main_id");
console.log(getELementByIdExample);
// innerHTML innerText
getELementByIdExample.innerHTML = "welcome to js class!"
getELementByIdExample.innerText = "welcome"

// creating element

let h2 = document.createElement("h2")
h2.innerText = " DOM";
// APPENDChild
getELementByIdExample.appendChild(h2)

// setAttribute
h2.setAttribute("class","para")
console.log(h2);

// styling 
h2.style.fontSize = "30px";

h2.classList= "heading_h2";

// events


getELementByIdExample.addEventListener("click", (event)=>{
    console.log(event);
})