'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.hey = function () {
  console.log("Hey There!!!");
};

Person.hey();

const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(jonas);
// console.log(jonas.firstName);
// console.log(jonas["firstName"]);
// console.log(matilda);
// console.log(jack);

// console.log(jonas instanceof Person);
// console.log(Person.prototype);

Person.prototype.clacAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = "Homo Sapoiens";

jonas.clacAge();
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

Array.prototype.unique = function () {
  console.log(this);
  return [...new Set(this)];
};

const arr = [1, 5, 9, 6, 7, 2, 5, 4, 1, 5, 2];

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
const andrew = new PersonCl("Andrew Park", 1968, "male");
console.log(andrew);

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

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steve";
steven.birthYear = 2002;
console.log(PersonProto);
console.log(steven);
console.log(steven.__proto__);

steven.calcAge();

const sarah = Object.create(PersonProto);
console.log(sarah);
sarah.init("Sarah", 1979);
console.log(sarah);



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

const ford = new CarCl("Ford", 120);
console.log(ford);
console.log(ford.speed);
console.log(ford.speedUS);
console.log(ford);
ford.speedUS = 100;
console.log(ford);
