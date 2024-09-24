const student = {
  fullName: "Wahaj ",
  Marks: 80,
  printMarks: () => {
    console.log("i am a function inside an object", this.Marks);
  },
};

// prototype in java script

const employee = {
  calcTax() {
    console.log("tax ratio is 10%");
  },
};

const Rahaman = {
  salary: 50000,
};

Rahaman.__proto__ = employee;
