// Functions
//
// Basic Function
function addNums(num1, num2) {
    // this version produces an effect in the console but no return
    console.log(num1 + num2);
  }
  
  addNums(5, 4); // 9
  addNums(); // NaN --> Not a Number
  
  // Values for arguments can be pre-set to avoid complications when none get passed
  function addNums2(num1 = 1, num2 = 1) {
    // it's better to have functions return
    return num1 + num2;
  }
  
  console.log(addNums2()); // 2
  console.log(addNums2(3, 1)); // 4
  
  // Arrow Functions: introduced in ES6 (aka ES 2015), clean things up nicely
  const addNums3 = (num1 = 1, num2 = 1) => {
    return num1 + num2;
  };
  // this is a basic arrow function
  console.log(5, 5); // 10
  
  const addNums4 = (num1 = 1, num2 = 1) => num1 + num2;
  // can leave off curly braces if only one line, but leave off the return
  console.log(addNums4(4, 3)); // 7
  
  const addNums5 = num1 => num1 + 10;
  // can leave off parenthesis if only one argument
  console.log(addNums5(5)); // 15
  
  // todo.forEach((t) => console.log(t)); --> this would also work
  // there's an extra advantage to arrows when using the "this" keyword
  