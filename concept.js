// Contructor function

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const person = new Person("Mohd", "Zaid");
// console.log(person);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);

console.log(steven);

steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();
