class person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
}

class engineer extends person {
  constructor(barnch) {
    super();
    this.barnch = barnch;
  }
  work() {
    super.eat();
    console.log("i build things");
    super.sleep();
  }
}

let Wahajobj = new engineer("chmeical eng");

//   parctice
let DATA = " and here is the information";
class user {
  constructor(name, email) {
    this.Name = name;
    this.email = email;
  }

  ViewData() {
    console.log("you are welcome in this websites", DATA);
  }
}

class admin extends user {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = " Data is changed by the admin";
  }
}

let student1 = new user("Wahaj", "wahj123@gami.com");
let student2 = new user("Asad", " asa123@gamil.com");
let teacher = new user("Bilal", "bilal123@gamil.com");
let admin1 = new admin("Taimur", "taim1223@gamil.com");
