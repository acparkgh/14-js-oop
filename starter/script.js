'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.hey = function () {
//   console.log("Hey There!!!");
// };

// Person.hey();

// const jonas = new Person("Jonas", 1991);
// const matilda = new Person("Matilda", 2017);
// const jack = new Person("Jack", 1975);

// console.log(jonas);
// console.log(jonas.firstName);
// console.log(jonas["firstName"]);
// console.log(matilda);
// console.log(jack);

// console.log(jonas instanceof Person);
// console.log(Person.prototype);

// Person.prototype.clacAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Person.prototype.species = "Homo Sapoiens";

// jonas.clacAge();
// console.log(jonas.species);
// console.log(jonas);
// console.log(jonas.__proto__);
// console.log(Person.__proto__);
// console.log(Person.prototype);
// console.log(Object.prototype);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(jonas.hasOwnProperty("firstName"));

// console.log([1, 2, 5, 8, 6].__proto__ === Array.prototype);
// console.log([1, 2, 5, 8, 6]);

// Array.prototype.unique = function () {
//   console.log(this);
//   return [...new Set(this)];
// };

// const arr = [1, 5, 9, 6, 7, 2, 5, 4, 1, 5, 2];

// const arrUnique = arr.unique();
// console.log(arrUnique);

class PersonCl {
  constructor(fullName, birthYear, gender) {
    console.log(this);
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.gender = gender;
  };
  
  calcAge() {
    console.log(this);
    console.log(2037 - this.birthYear);
  };
  // calcAge1 = () => {
  //   console.log(this);
  //   console.log(2037 - this.birthYear);
  // };

  greet() {
    console.log(`Hey ${this.firstName}`);
  };

  get age() {
    return 2037 - this.birthYear;
  };

  get fullName() {
    return this._fullName;
  };

  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    };
  };

  get birthYear() {
    return this._birthYear;
  };

  set birthYear(year) {
    if (Number.isInteger(year)) {
      this._birthYear = year;
    } else {
      alert(`${year} is not valid integer`);
    };
  };

  get gender() {
    return this._gender;
  };

  set gender(sex) {
    this._gender = sex;
  };

  static heyThere() {
    console.log("Hey there!!!");
  };

};

PersonCl.heyThere();

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, gender, course) {
    super(fullName, birthYear, gender)
    this.course = course;
  };
   
  introduce() {
    console.log(`Hi, my name is ${this.fullName}, and I study ${this.course}.`);
  };

  calcAge() {
    console.log(this);
    console.log(2021 - this.birthYear);
  }
};

const andrew = new PersonCl("Andrew Park", 1968, "male");
console.log(andrew);

const kim = new StudentCl("Kim Smith", 1999, "female", "Biology");
console.log(kim);
kim.introduce();
kim.calcAge();



const PersonProto = {
  
  calcAge: function() {
    console.log(2037 - this.birthYear);
  },
  
  // init(firstName, birthYear) {
  init: function(firstName, birthYear) {
    console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

};

// const steve = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto)
const jay = Object.create(StudentProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hi, my name is ${this.firstName}, and I study ${this.course}.`);
};

jay.init("Jay", 1998, "Education");
jay.introduce();
jay.calcAge();

console.log(jay);


// steve.init("Steve", 1998);
// console.log(steve);


class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currenty = currency;
    this._pin = pin;
    this._movements = [];
    this.local = navigator.language;
    console.log(`Thank you for opening account ${this.owner}.`);
  };
  
  deposit(val) {
    this._movements.push(val);
    return this;
  };

  withdrawal(val) {
    this.deposit(-val);
    return this;
  };

  getMovements() {
    return this._movements;
  };

  _approveLoan(val) {
    return true;
  };

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved for ${val}`);
      return this;
    };
  };

};

const acct1 = new Account("Jonas", "EUR", 1111);
console.log(acct1.deposit(500));
acct1.withdrawal(300);
acct1.requestLoan(1000);
console.log(acct1);
console.log(acct1._movements);
console.log(acct1.getMovements());



console.log("----------- Inheritance ---------------");

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   console.log(this);
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype)
// console.log(Person.prototype);
// console.log(Student.prototype);


// Student.prototype.introduce = function () {
//   console.log(`Hi, my name is ${this.firstName} and I study ${this.course}.`);
// }

// const mike = new Student("Mike", 2020, "Computer Science");

// console.log(mike);
// console.log(mike.__proto__);
// console.log(mike.__proto__ === Student.prototype);
// console.log(mike.__proto__.__proto__);
// console.log(mike.__proto__.__proto__ === Person.prototype);
// mike.introduce();



// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steve";
// steven.birthYear = 2002;
// console.log(PersonProto);
// console.log(steven);
// console.log(steven.__proto__);

// steven.calcAge();

// const sarah = Object.create(PersonProto);
// console.log(sarah);
// sarah.init("Sarah", 1979);
// console.log(sarah);



// console.log(andrew.fullName);
// console.log(andrew._fullName);
// console.log(andrew.birthYear);
// console.log(andrew._gender);
// console.log(andrew.gender);


// const jessica = new PersonCl("Jessica Davis", 1996);

// jessica.calcAge();
// console.log(jessica.age);
// jessica.greet();


// const account = {
//   owner: "Jonas",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   }
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);





//////////// Code Challenge 1 //////////////////

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/h.`);
// };

// Car.prototype.brake = function () {
//   console.log(this);
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/h.`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// console.log(bmw);
// console.log(mercedes);

// bmw.accelerate();
// console.log(bmw.speed);

// mercedes.brake();
// console.log(mercedes.speed);
// mercedes.accelerate();
// console.log(mercedes.speed);
// mercedes.accelerate();
// console.log(mercedes.speed);

////////////////// Code Challenge 2 //////////////////////////////////

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   };

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.car} is going at ${this.speed}`);
//   };

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.car} is going at ${this.speed}`);
//   };

//   get speedUS() {
//     return this.speed / 1.6;
//   };

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   };

// };

// const ford = new CarCl("Ford", 120);
// console.log(ford);
// console.log(ford.speed);
// console.log(ford.speedUS);
// console.log(ford);
// ford.speedUS = 100;
// console.log(ford);


/////////////////////// Code Challenge 3 ///////////////////////////

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}.`);
// };

// Car.prototype.brake = function () {
//   this.speed--;
//   console.log(`${this.make} going at ${this.speed} km/h.`);
// };

// const Ev = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// Ev.prototype = Object.create(Car.prototype);
// const carProto = Object.create(Car.prototype);
// const evProto = Object.create(Ev.prototype);
// console.log(carProto);
// console.log(evProto);
// console.log(Ev.prototype);
// console.log(Car.prototype);

// Ev.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}.`);
// };

// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// const tesla = new Ev("Tesla", 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.brake();

// console.log(tesla.__proto__.__proto__ === Car.prototype);
// const abcd = new Car("ABC", 100)
// console.log(abcd);
// console.log(abcd.__proto__);
// console.log(abcd.__proto__);
// console.log(Ev._proto__ === abcd.prototype);

/////////////////////// Code Challenge 4 ///////////////////////////

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  };

  accelerate() {
    this.speed += 10;
    console.log(`${this.car} is going at ${this.speed}`);
  };

  brake() {
    this.speed -= 5;
    console.log(`${this.car} is going at ${this.speed}`);
  };

  get speedUS() {
    return this.speed / 1.6;
  };

  set speedUS(speed) {
    this.speed = speed * 1.6;
  };
};

class EVCl extends CarCl{
  
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  };

  accelerate() {
    // console.log(this);
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}.`);
    return this;
  };
  
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} is charged to ${this.charge}.`);
    return this;
  };
  
};

const evCar = new EVCl("Prius", 100, 35);
console.log(evCar);
evCar.accelerate();
evCar.chargeBattery(60);
evCar.chargeBattery(99).accelerate();


