'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(jonas);
console.log(jonas.firstName);
console.log(jonas["firstName"]);
console.log(matilda);
console.log(jack);

console.log(jonas instanceof Person);

console.log(Person.prototype);

Person.prototype.clacAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = "Homo Sapoiens";

jonas.clacAge();
console.log(jonas.species);
console.log(jonas);
console.log(jonas.__proto__);
console.log(Person.__proto__);
console.log(Person.prototype);
console.log(Object.prototype);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(jonas.hasOwnProperty("firstName"));

console.log([1, 2, 5, 8, 6].__proto__ === Array.prototype);
console.log([1, 2, 5, 8, 6]);

Array.prototype.unique = function () {
  console.log(this);
  return [...new Set(this)];
};

const arr = [1, 5, 9, 6, 7, 2, 5, 4, 1, 5, 2];

const arrUnique = arr.unique();
console.log(arrUnique);


//////////// Code Challenge 1 //////////////////

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h.`);
};

Car.prototype.brake = function () {
  console.log(this);
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h.`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

console.log(bmw);
console.log(mercedes);

bmw.accelerate();
console.log(bmw.speed);

mercedes.brake();
console.log(mercedes.speed);
mercedes.accelerate();
console.log(mercedes.speed);
mercedes.accelerate();
console.log(mercedes.speed);
