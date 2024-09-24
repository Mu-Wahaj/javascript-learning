//  to remove our callback hell problems we use promises

let promise = () => {
  let a = 5,
    b = 6;
  z = a + b;
  return new Promise((resolve, reject) => {
    console.log("sum of a and b =", z);
    resolve("success");
  });
};

let getpromise = promise();
getpromise.then((res) => {
  console.log("sum is succefully return", res);
});
getpromise.catch((err) => {
  console.log("the opretion is not perform", err);
});

function DataDB(Dataid, getnextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("DATA", Dataid);
      resolve("success");
      if (getnextData) {
        getnextData();
      }
    }, 10000);
  });
}
let Promise = DataDB(123);

//  promises chain
console.log("we are fethcing DAta please WAit");
let asynFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we get the DATA1");
      resolve("succcess");
    }, 4000);
  });
};
let asynFunction2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we get the DATA2");
      resolve("succcess");
    }, 4000);
  });
};

let p1 = asynFunction();
p1.then((res) => {
  console.log(res);
  console.log("we are fethcing DAta2 please WAit");
  let p2 = asynFunction2();
  p2.then((res) => {
    console.log(res);
  });
});
// this called promise chain just like callback hell

function DataDB(Dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("DATA", Dataid);
      resolve("succces");
    }, 5000);
  });
}
// this coplex coding and callbacks is called callback hell  now we use promisees to rsolve this tupe
// calback hell
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
// promise chain

// by using promises chain we dont needd the callback hell problemm

DataDB(1).then((res) => {
  console.log(res);
  console.log("getting DATA 2....");
  DataDB(2).then((res) => {
    console.log(res);
    console.log("getting DATA 3....");
    DataDB(3).then((res) => {
      console.log(res);
      console.log("getting DATA 4....");
      DataDB(4).then((res) => {
        console.log(res);
      });
    });
  });
});

// another think this is even and acull meaning of promises chain
DataDB(1)
  .then((res) => {
    return DataDB(2);
  })
  .then((res) => {
    return DataDB(3);
  })
  .then((res) => {
    console.log(res);
  });
