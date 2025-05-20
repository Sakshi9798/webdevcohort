// # Question 01
// Count vowels in a given string using includes() or any string method.

let str = "Hello World";
let count = 0;
let vowels = "aeiouAEIOU";
for (let char of str) {
  if (vowels.includes(char)) count++;
}
console.log(count); // Output: 3
