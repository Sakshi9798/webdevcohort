let arr=[1,5,6,8,9]

//
// function double(x) {
//     return x*2
// }

// const b=arr.map(function double(x) {
//     return x*2
// }) // map is a inbuilt function and we pass hered ouble function as a argument so thats why map called HOF.
// console.log(b)

//more optimize way using ARROE function
const c=arr.map((x)=> {
    return x*2
})
console.log(c)

//other otimize way
const b=arr.map(x=>x*2)
console.log(c)
