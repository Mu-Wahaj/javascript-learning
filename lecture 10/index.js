// synrinous programming

console.log("i am first");
console.log("i am second");
console.log("i am third");
//  NOw this takes time as it come from backend (api) so if we use the asynchrronous programming so that aur programe  flow wil not be disturb
setTimeout(() => {
  console.log("i am fourth"); // it takes 4 second to exsecute
}, 1000);

console.log("i am fifth");
console.log("i am sixth");

// CALLBACKS

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b) {
  sum(a, b);
}

calculator(1, 2, sum);

//callaback hell

function DataDB(Dataid, getnextData) {
  setTimeout(() => {
    console.log("DATA", Dataid);
    if (getnextData) {
      getnextData();
    }
  }, 1000);
}
// this coplex coding and callbacks is called callback hell
DataDB(1, () => {
  console.log("getting DATA 2....");
  DataDB(2, () => {
    console.log("getting DATA 3....");
    DataDB(3, () => {
      console.log("getting DATA 4....");
      DataDB(4);
    });
  });
});
