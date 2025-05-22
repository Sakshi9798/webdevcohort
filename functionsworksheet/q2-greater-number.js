// Q2: Write a function that takes two numbers as input and determines which one is greater.
function findGreaterNumber(a, b) {
  if (a > b) {
    console.log(a + " is greater");
  } else if (b > a) {
    console.log(b + " is greater");
  } else {
    console.log("Both numbers are equal");
  }
}

// Example
findGreaterNumber(10, 20); // 20 is greater