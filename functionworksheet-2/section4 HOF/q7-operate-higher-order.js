// Higher order function that takes two numbers and a function
function operate(a, b, func) {
  return func(a, b);
}

// Example usage
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(4, 5, add)); // Output: 9
console.log(operate(4, 5, multiply)); // Output: 20
