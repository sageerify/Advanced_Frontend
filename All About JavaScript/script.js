function addNew(){
    const para = document.createElement("p");
    const node = document.createTextNode("subscribe our channel to get more videos")
    para.appendChild(node);
    const elem = document.querySelector("#box1");
    elem.appendChild(para);
}