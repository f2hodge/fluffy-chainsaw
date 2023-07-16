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
