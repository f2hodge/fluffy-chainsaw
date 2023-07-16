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
const age2 = 30; // Number
const rating = 4.5; // Number
const isCool = true; // Boolean
const x = null; // null (browser will say is an object as an error)
const y = undefined; // undefined
let z; // undefined

console.log(typeof firstName);
console.log(typeof age2);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// Concatenation of String variables
console.log("My name is " + firstName + ", and I am " + age + " years old.");
// Template String
console.log(`My name is ${firstName}, and I am ${age} years old...`);
// Variable use for a message
const hello = `My name is ${firstName}, and I am ${age} years old!`;
console.log(hello);

// String properties and methods
const s = "Hello World!";

console.log(s);
console.log(s.length); // is a property so doesn't have parenthesis
console.log(s.toUpperCase()); // is a method so does have parenthesis
console.log(s.toLowerCase());
console.log(s.substring(0, 5)); // subset from index 0 to 5, but not including terminal index
console.log(s.substring(0, 5).length); // chain calls together to get an effect
console.log(s.split("")); // results in 12-item array of single-character strings

// Demonstrate split() in a useful way
const serviceList =
  "technology, consulting, computers, it, code, artificial intelligence, machine learning";

console.log(serviceList.split(", "));
