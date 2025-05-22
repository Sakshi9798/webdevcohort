// Q8: Write a function that takes a string as input and determines if it contains the word "hello".
function containsHello(str) {
  if (str.toLowerCase().includes("hello")) {
    console.log("String contains 'hello'");
  } else {
    console.log("String does not contain 'hello'");
  }
}

// Example
containsHello("Say Hello to everyone!"); // String contains 'hello'