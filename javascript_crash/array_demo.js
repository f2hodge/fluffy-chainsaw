// Arrays collections that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5); // use the constructor to create one
const fruits = ["apple", "pear", "orange"]; // usual creation involves declaring literals

console.log(numbers);
console.log(fruits);

fruits[3] = "grapes"; // can modify an existing array even if constant
console.log(fruits);
// fruits = []; // can't modify by assigning a new array

fruits.push("mango"); // this is the usual way to append, since we may not know the length
console.log(fruits);
fruits.unshift("strawberries"); // this is the way to add to the start
console.log(fruits);
fruits.pop(); // removes and returns the last element of the array
console.log(fruits);
console.log(fruits.pop()); // shows the returned value of the popped element
console.log(fruits);
console.log(Array.isArray("hello")); // isArray method returns boolean value of identity
console.log(fruits.indexOf("orange")); // returns the index of an element value
