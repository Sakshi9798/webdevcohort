// # Question 04
// Capitalize the first letter of each word in a sentence.

let sentence = "hello baby you are amazing";
let result = sentence.split(" ").map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)
).join(" ");
console.log(result); // Output: "Hello Baby You Are Amazing"
