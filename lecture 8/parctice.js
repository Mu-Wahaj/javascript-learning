// let modebtn = document.querySelector("#mode");
// let current = "light";

// modebtn.addEventListener("click", () => {
//   //   console.log("button is clicked");
//   //   console.log(e);
//   if (current === "light") {
//     document.querySelector("body").style.backgroundColor = "black";
//     current = "dark";
//   } else {
//     document.querySelector("body").style.backgroundColor = "white";
//     current = "light";
//   }
//   console.log(current);
// });

// acessong by css class

let modebtn = document.querySelector("#mode");
let current = "light";
let body = document.querySelector("body");

modebtn.addEventListener("click", () => {
  //   console.log("button is clicked");
  //   console.log(e);
  if (current === "light") {
    body.classList.add("dark");
    body.classList.remove("light");
    current = "dark";
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    current = "light";
  }
  console.log(current);
});
