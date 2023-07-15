// These are console demonstrations
// console.log("Hello Ryan");
// console.error("This is an error");
// console.warn("This is a warning");

/*
// Demonstrate: Variables
// var, let, const (we don't use var anymore)
let age = 30;
console.log(age);
age = 31;
console.log(age);

const gender = "male";
console.log(gender);
gender = "female"; // Throws a TypeError here 'assignment to const'
console.log(gender); // Does not run after the TypeError

// Declaration, some with Instantiation
const firstName = "John"; // String
const age = 30; // Number
const rating = 4.5; // Number
const isCool = true; // Boolean
const x = null; // null (browser will say is an object as an error)
const y = undefined; // undefined
let z; // undefined

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
*/
/*
// Concatenation of String variables
console.log("My name is " + firstName + ", and I am " + age + " years old.");
// Template String
console.log(`My name is ${firstName}, and I am ${age} years old...`);
// Variable use for a message
const hello = `My name is ${firstName}, and I am ${age} years old!`;
console.log(hello);


// String properties and methods
const s = 'Hello World!';

console.log(s);
console.log(s.length); // is a property so doesn't have parenthesis
console.log(s.toUpperCase()); // is a method so does have parenthesis
console.log(s.toLowerCase());
console.log(s.substring(0, 5)); // subset from index 0 to 5, but not including terminal index
console.log(s.substring(0, 5).length); // chain calls together to get an effect
console.log(s.split('')); // results in 12-item array of single-character strings

// Demonstrate split() in a useful way
const serviceList = "technology, consulting, computers, it, code, artificial intelligence, machine learning"

console.log(serviceList.split(", "));
*/

// Arrays collections that hold multiple values
/*
const numbers = new Array(1, 2, 3, 4, 5); // use the constructor to create one
const fruits = ['apple', 'pear', 'orange']; // usual creation involves declaring literals

console.log(numbers);
console.log(fruits);

fruits[3] = 'grapes'; // can modify an existing array even if constant
console.log(fruits);
// fruits = []; // can't modify by assigning a new array

fruits.push('mango'); // this is the usual way to append, since we may not know the length
console.log(fruits);
fruits.unshift('strawberries'); // this is the way to add to the start
console.log(fruits);
fruits.pop(); // removes and returns the last element of the array
console.log(fruits);
console.log(fruits.pop()); // shows the returned value of the popped element
console.log(fruits);
console.log(Array.isArray('hello')); // isArray method returns boolean value of identity
console.log(fruits.indexOf('orange')); // returns the index of an element value
*/
/*
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
*/
// Many applications call for an Array of Objects
/*
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
*/

// Loops: for
for (let i = 0; i < 10; i++) {
  console.log(`For-loop Number: ${i}`);
}

// Loops: while
let i = 0;
while (i < 10) {
  console.log("While-loop Number: " + i);
  i++;
}
