// Loops: for
for (let i = 0; i < 10; i++) {
  console.log(`For-loop Number: ${i}`);
}

// Alternate for loop: potentially more elegant design
for (let i = 0; i < todo.length; i++) {
  // loop content here
}

// Loops: while
let i = 0;
while (i < 10) {
  console.log("While-loop Number: " + i);
  i++;
}

// Loops: for-of (BETTER for iterating through arrays)

for (let t of todo) {
  console.log(t.id);
}

// (BEST) High-order Array Methods: forEach, map, filter
todo.forEach(function (t) {
  console.log(t.text);
});

const todoText = todo.map(function (t) {
  return t.text;
}); // map creates an array of the items returned(even if they're objects or arrays themselves)

console.log(todoText);

const todoDone = todo.filter(function (t) {
  return t.isComplete === true;
}); // filter returns members(even arrays or objects) fitting a condition

console.log(todoDone);

const todoDone2 = todo
  .filter(function (t) {
    return t.isComplete === true;
  })
  .map(function (t) {
    return t.text;
  }); // filter can be chained with other methods

console.log(todoDone2);
