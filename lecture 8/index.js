let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
  console.log("you have clickck the button");
  let a = 27;
  a++;
  console.log(a);
};
// let div = document.querySelector("#divider");
// div.onmouseover = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log("you are in  the div");
//   let a = 27;
//   a++;
//   console.log(a);
// };

//  addEventListeners
let button = document.querySelector("#btn2");

button.addEventListener("click", (e) => {
  console.log("button is clicked1");
});
const handler2 = () => {
  console.log("button is clicked2");
};
button.addEventListener("click", handler2);
button.addEventListener("click", (e) => {
  console.log("button is clicked3");
});

button.removeEventListener("click", handler2);
