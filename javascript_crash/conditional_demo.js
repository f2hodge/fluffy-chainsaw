// Conditionals
const x = "10";

if (x == 10) {
  // the Double "==" will match value, but not type resulting in true here
  console.log("x is 10");
}

if (x === 10) {
  // the Triple "===" will match value, but not type resulting in false here
  console.log("x is 10");
} else {
  console.log("x is not value and type equivalent to 10");
}

// if, else if, else conditional series and multiple conditions

const q = 20;

if (q === 10) {
  console.log("q is 10");
} else if (q > 10) {
  console.log("q is greater than 10");
} else {
  console.log("q is less than 10");
}

w = 4;
y = 10;

if (w > 5 || y > 10) {
  // OR with two conditions: either resulting true runs the body
  console.log("w is more than 5 OR y is more than 10");
}

if (w > 5 && y > 10) {
  // AND with two conditions: both resulting true runs the body
  console.log("x is more than 5 AND y is more than 10");
}

// Ternary operator
const l = 20;

const oldEnough = l >= 21 ? "admitted" : "deny entry";
console.log(oldEnough);

// Switch statement
const color = "mauve";

switch (color) {
  case "black":
    console.log("color is black");
    break;
  case "blue":
    console.log("color is blue");
    break;
  case "green":
    console.log("color is green");
    break;
  case "red":
    console.log("color is red");
    break;
  default:
    console.log("color not on our list");
    break;
}
