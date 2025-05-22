// Q5: Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.
function containsLetterA(str) {
  if (str.includes('a') || str.includes('A')) {
    console.log("String contains 'a' or 'A'");
  } else {
    console.log("String does not contain 'a' or 'A'");
  }
}

// Example
containsLetterA("Alpha"); // String contains 'a' or 'A'