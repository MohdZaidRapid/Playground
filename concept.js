// // Contructor function

// // const Person = function (firstName, birthYear) {
// //   // Instance properties
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;
// // };

// // const person = new Person("Mohd", "Zaid");
// // console.log(person);

// // const PersonProto = {
// //   calcAge() {
// //     console.log(2037 - this.birthYear);
// //   },
// // };

// // const steven = Object.create(PersonProto);

// // console.log(steven);

// // steven.name = "Steven";
// // steven.birthYear = 2002;
// // steven.calcAge();

// // Initialize an object with properties and methods
// // const job = {
// //   position: "cashier",
// //   type: "hourly",
// //   isAvailable: true,
// //   showDetails() {
// //     const accepting = this.isAvailable
// //       ? "is accepting applications"
// //       : "is not currently accepting applications";

// //     console.log(
// //       `The ${this.position} position is ${this.type} and ${accepting}.`
// //     );
// //   },
// // };

// // Use Object.create to pass properties
// // const barista = Object.create(job);

// // barista.position = "barista";
// // barista.showDetails();

// // const job1 = {
// //   name: "zaid",
// //   age: 23,

// //   showDetails() {
// //     console.log(`My name is ${this.name} and age is ${this.age}`);
// //   },
// // };

// // job1.showDetails();

// // const job2 = Object.create(job1);

// // job2.showDetails();

// // TODO Object keys
// // Initialize an object
// // const employees = {
// //   boss: "Michael",
// //   secretary: "Pam",
// //   sales: "Jim",
// //   accountant: "Oscar",
// // };

// // for (const key of Object.keys(employees)) {
// //   console.log(employees[key]);
// //   console.log(key);
// // }

// // const emp = Object.keys(employees);
// // console.log(emp);

// // Object.keys(employees).forEach((key) => {
// //   let value = employees[key];
// //   console.log(`${key} and ${value}`);
// // });

// // const value = Object.values(employees).forEach((val) => {
// //   console.log(val);
// // });
// // // console.log(value);

// // Initialize an object
// // const operatingSystem = {
// //   name: "Ubuntu",
// //   version: 18.04,
// //   license: "Open Source",
// // };

// // // Get the object key/value pairs
// // const entries = Object.entries(operatingSystem);

// // for (const [key, val] of Object.entries(operatingSystem)) {
// //   console.log(`${key}  ${val}`);
// // }
// // Initialize an object
// // const name = {
// //   firstName: 'Philip',
// //   lastName: 'Fry'
// // };

// // // Initialize another object
// // const details = {
// //   job: 'Delivery Boy',
// //   employer: 'Planet Express'
// // };

// // // Merge the objects
// // const character = Object.assign(name, details);

// // console.log(character)

// // Object assign

// // Initialize an object
// // const name = {
// //   firstName: "Philip",
// //   lastName: "Fry",
// // };

// // // Initialize another object
// // const details = {
// //   firstName: "zaid",
// //   job: "Delivery Boy",
// //   employer: "Planet Express",
// // };

// // // Merge the objects
// // const character = Object.assign(name, details);

// // console.log(character);

// // Initialize an object
// // const user = {
// //   username: "Allah",
// //   password: "S.A.W",
// // };

// // // Freeze the object
// // const newUser = Object.freeze(user);

// // newUser.password = "Rehman";
// // newUser.active = true;

// // console.log(newUser);

// // const person = {
// //   name: "Zaid",
// //   age: 24,
// // };

// // const zaid = Object.seal(person);
// // // const zaid = person;
// // zaid.age = 23;
// // zaid.name = "zaidi";
// // zaid.fr = true;

// // console.log(zaid);
// // console.log(person);

// // Shallow copy and deep copy
// // const Person1 = {
// //   name: "zaid",
// //   age: 23,
// // };

// // const person2 = Person1;
// // // console.log(person2.name);
// // person2.name = "zaidi";

// // console.log(person2);
// // console.log(Person1);

// // function Fun(name, age) {
// //   this.name = name;
// //   this.age = age;
// // }

// // function Fun1(name, age, programming) {
// //   Fun.call(this, name, age);
// //   this.programming = programming;
// // }

// // Fun.prototype.getDetails = function () {
// //   console.log(`Name ${this.name} and ${this.age} age  of person `);
// // };

// // Fun1.prototype = Fun.prototype;

// // Fun1.prototype.getDetailsOfPerson = function () {
// //   console.log(
// //     `Name ${this.name} Profession ${this.programming} and age of the ${this.age} `
// //   );
// // };

// // const fn = new Fun("zaid", 23);
// // const fn1 = new Fun1("zazaidiid", 26, "JS");

// // fn.getDetails();
// // fn1.getDetails();
// // fn1.getDetailsOfPerson();

// // Use Object.create to pass properties

// // const barista = Object.create(job);

// // barista.position = "barista";
// // barista.showDetails();

// // const job1 = {
// //   name: "zaid",
// //   age: 23,

// //   showDetails() {
// //     console.log(`My name is ${this.name} and age is ${this.age}`);
// //   },
// // };

// // job1.showDetails();

// // const job2 = Object.create(job1);

// // job2.showDetails();

// // const person = {
// //   isHuman: false,
// //   printIntroduction: function () {
// //     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
// //   },
// // };

// // const me = Object.create(person);

// // me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
// // me.isHuman = true; // inherited properties can be overwritten

// // me.printIntroduction();

// function Fun(name, age) {
//   this.age = age;
//   this.name = name;
// }

// function Fun1(name, age, programming) {
//   Fun.call(this, name, age);
//   this.programming = programming;
// }


// Promise


