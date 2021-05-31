'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(jonas);
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
console.log(Person.prototype);
console.log(Object.prototype);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(jonas.hasOwnProperty("firstName"));


