// function greet(name, callback) {
//     console.log("hello" + name)
//     callback() // call  //output : Good Byee
// }

// function sayByee() {
//     console.log("Good Byee")
// }

// greet("alpha intern", sayByee) // name ke andar h "alpha intern" call greet function here

function calculate(a, b, callback) {
    return callback(a, b)  //mul(4, 5)
}

function add(x, y) {
    return x+y
}
 function mul(x, y) {
    return x*y
}

console.log(calculate(4, 5, mul))  // only menation function name = mul or add