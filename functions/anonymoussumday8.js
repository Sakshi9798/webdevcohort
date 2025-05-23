// anonumous function = those function dont have any name
let a=function() {
    console.log("hii")
}
a()

// //sum of 2 number
const add=function(a,b) {
    return a+b
}
console.log(add(4,4))

// const greet=function() {
//     console.log("good morning alpha intern")
// }
// greet()

//optimize way using template literal
const greet=(name)=>`hello${name}`
console.log(greet("alpha intern"))

(function() {
    console.log("hello")
}) ()

//ARROW FUNCTION+IIFE
(()=>{
    console.log("hii")
}) ()

//2 number square
(function(x) {
    return console.log(x * x);
})(5); // Output: 25
