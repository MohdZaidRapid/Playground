// Contructor function

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const person = new Person("Mohd", "Zaid");
// console.log(person);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);

// console.log(steven);

// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();

// Initialize an object with properties and methods
// const job = {
//   position: "cashier",
//   type: "hourly",
//   isAvailable: true,
//   showDetails() {
//     const accepting = this.isAvailable
//       ? "is accepting applications"
//       : "is not currently accepting applications";

//     console.log(
//       `The ${this.position} position is ${this.type} and ${accepting}.`
//     );
//   },
// };

// Use Object.create to pass properties
// const barista = Object.create(job);

// barista.position = "barista";
// barista.showDetails();

// const job1 = {
//   name: "zaid",
//   age: 23,

//   showDetails() {
//     console.log(`My name is ${this.name} and age is ${this.age}`);
//   },
// };

// job1.showDetails();

// const job2 = Object.create(job1);

// job2.showDetails();

// TODO Object keys
// Initialize an object
// const employees = {
//   boss: "Michael",
//   secretary: "Pam",
//   sales: "Jim",
//   accountant: "Oscar",
// };

// const emp = Object.keys(employees);
// console.log(emp);

// Object.keys(employees).forEach((key) => {
//   let value = employees[key];
//   console.log(`${key} and ${value}`);
// });

// const value = Object.values(employees).forEach((val) => {
//   console.log(val);
// });
// // console.log(value);

// Initialize an object
// const operatingSystem = {
//   name: "Ubuntu",
//   version: 18.04,
//   license: "Open Source",
// };

// // Get the object key/value pairs
// const entries = Object.entries(operatingSystem);

// for (const [key, val] of Object.entries(operatingSystem)) {
//   console.log(`${key}  ${val}`);
// }
// Initialize an object
const name = {
  firstName: 'Philip',
  lastName: 'Fry'
};

// Initialize another object
const details = {
  job: 'Delivery Boy',
  employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(name, details);

console.log(character);