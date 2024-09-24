let h1 = document.querySelector("h1");
console.dir(h1.innerHTML);

h1.innerText = h1.innerHTML + "  fron the students of apna college";
console.dir(h1);

let div = document.querySelectorAll(".box");
idx = 0;
for (div of div) {
  div.innerText = `uniwue value ${idx}`;
  idx++;
}
// DOm PArt2 question no 1
let button = document.createElement("button");
button.style.backgroundColor = "red";
button.style.color = "white";
button.innerText = "click me";
console.log(button);

let Head = document.querySelector("body");
Head.prepend(button);

// let para = document.createElement("p");
// para.setAttribute("class", "pragraph");
// para.style.backgroundColor = "blue";
// para.style.color = "white";
// para.innerText = "I Am Wahaj";

// document.querySelector("h1").prepend(para);

// DOm PArt2 question no 2
let para = document.querySelector("p");
console.log(para);
console.log(para.getAttribute("class"));
// para.setAttribute("class", "para2");   it will overwrite the previous class  so we will use the class list
// para.classList("p");
para.classList.add("para2");
