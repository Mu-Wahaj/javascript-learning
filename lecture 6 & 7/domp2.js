// gettng element by atributes

let div1 = document.querySelector("div");
console.dir(div1);
console.log(div1);
let p = document.querySelector("p");
console.dir(p);
console.log(p);
let para = document.querySelector("p");
console.log(para);
let attribute = para.getAttribute("class");
console.log(attribute);

// stting and change the attribute value

let parag = document.querySelector("p");
console.log(parag);
let setval = parag.setAttribute("id", "paragraph");

// aceesing the styles also we use

let style = document.querySelector("div");
console.log(style);
style.style.backgroundColor = "red";
style.style.fontSize = "30px";
style.innerText = "hello";

// insert elemnts by js
let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText = "submit me";
let newBtne = document.createElement("button");
console.log(newBtne);
newBtne.innerText = "submit me";

let addBtn = document.querySelector("div");
addBtn.after(newBtn);
let addBt = document.querySelector("p");
addBt.after(newBtne);

let topHead = document.createElement("h1");
topHead.innerText = "welcome MWJ";
topHead.style.backgroundColor = "gray";
topHead.style.color = "white";

let Head = document.querySelector("div");
Head.prepend(topHead);
