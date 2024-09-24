//basic exmaple

function APi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wheater Data");
    }, 2000);
    resolve(200);
  });
}

async function wheaterDAta() {
  await APi();

  await APi();
}
// ASYn await   this example is use in previous two topics
function DataDB(Dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("DATA", Dataid);
      resolve("success");
    }, 3000);
  });
}

async function gettingData() {
  console.log("getting data1....");
  await DataDB(1);
  console.log("getting data2....");

  await DataDB(2);
  console.log("getting data3....");

  await DataDB(3);
}

// iife   imdiatly invoke funcion expression

(async function () {
  console.log("getting data1....");
  await DataDB(1);
  console.log("getting data2....");

  await DataDB(2);
  console.log("getting data3....");

  await DataDB(3);
})();
