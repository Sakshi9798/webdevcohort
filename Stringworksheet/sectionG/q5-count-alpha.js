// # Question 05
// Write a function that takes a string input and returns the number of times "Alpha" appears using replaceAll() and length.

function countAlpha(str) {
  let withoutAlpha = str.replaceAll("Alpha", "");
  let count = (str.length - withoutAlpha.length) / "Alpha".length;
  return count;
}

console.log(countAlpha("AlphaIntern Alpha Academy Alpha")); // Output: 3
