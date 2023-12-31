// Object literals
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person); // shows the values of everything in the object
console.log(person.firstName); // shows the value of that key
console.log(person.address.street); // pulls value from a key of a key embedded object
console.log(person.hobbies[1]); // pulls value from array in object, at value 1

const {
  firstName,
  lastName,
  address: { city },
} = person; // Deconstruction and reassignment in variables (relatively new feature, ES6)
console.log(city); // returns Boston

person.email = "john@test.com"; // will add an email key to the object with value of 'john@test.com'
console.log(person);

// Many applications call for an Array of Objects
const todo = [
  {
    id: 1,
    text: "Take out trash",
    isComplete: true,
  },
  {
    id: 2,
    text: "Meet with client",
    isComplete: true,
  },
  {
    id: 3,
    text: "Dentist appointment",
    isComplete: false,
  },
];

console.log(todo);
console.log(todo[1].text); // selecting a value through the Array and then Object with index and key

// convert above data to JSON for more versatile use
const todoJSON = JSON.stringify(todo);
console.log(todoJSON);


// Object Oriented Programming
//

// Constructor functions with prototypes
/*
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // can call the Date constructor in this one to produce a real date
  // this.getBirthYear = () => {      --> Doing it this way puts methods in every instance
  //   return this.dob.getFullYear();
  // };
  // this.getFullName = () => {       --> Same as above, see below for new way
  //   return `${this.firstName} ${this.lastName}`;
  // };
};

Person.prototype.getBirthYear = function() { // --> Removed from above (this is preferred)
  return this.dob.getFullYear();
};
Person.prototype.getFullName = function() { // --> Creating methods this way puts them in prototype of Objects
  return `${this.firstName} ${this.lastName}`;
};


// Instantiation
const person1 = new Person("Ted", "Darby", "04/03/1980");
const person2 = new Person("Bill", "Buffalo", "07/09/1975");
const person3 = new Person("Sara", "Carmichael", "01/25/1992");

// console.log(person1);
// console.log(person2.dob.getFullYear());
// console.log(person3.getBirthYear());
console.log(person1.getFullName());
*/
//
// End ES5 (previous version) of OOP in JavaScript
// Begin OOP in ES6
// Now Classes are added: does the same under the hood as prototype-version
// Class
class Persona {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // This is the syntactic sugar where this is placed within the class but appears in prototype
  getBirthYear() {
    return this.dob.getFullYear();
  };
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  };
};

const person5 = new Persona("Dwight", "Eisenhower", "03/14/1963");
const person6 = new Persona("Barbara", "Bush", "09/19/1945");
const person7 = new Persona("Margaret", "Thatcher", "11/23/1938");

console.log(person5.lastName.length);
console.log(person6.getFullName());
console.log(person7.getBirthYear());