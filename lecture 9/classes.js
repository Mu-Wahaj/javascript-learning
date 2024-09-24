// claasess in js

class Marcedes {
  start() {
    console.log("star");
  }
  stop() {
    console.log("stop");
  }
  brandname(brand) {
    this.brandname = brand;
  }
}

let furtuber = new Marcedes();
furtuber.brandname("toyota");

// contructor in js

class Marcedes2 {
  constructor(brand) {
    // super(brand);
    console.log("i am construtor u are creating a new object");
    this.brand = brand;
  }
  start() {
    console.log("star");
  }
  stop() {
    console.log("stop");
  }
}

let furtuner = new Marcedes2("furtuner");
let lexus = new Marcedes2("lexus");
console.log(lexus);
