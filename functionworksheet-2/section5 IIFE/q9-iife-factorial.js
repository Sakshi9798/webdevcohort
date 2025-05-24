// IIFE that calculates and logs the factorial of a number
(function(num) {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  console.log(`Factorial of ${num} is ${factorial}`);
})(5); // You can change 5 to any other number
