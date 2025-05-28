// const obj={
//     name:"alpha intern",  //key value pair must be seprated by comma(,)
//     age: 12
// }

// const person={name:"hello", age: 12}
// // 1.
// console.log(person.name) 
// // 2 way to access the obj
// console.log(person["name"])

//nested objects
// const obj={
//     name:"alpha intern",
//     age: 12,
//     marks:{
//         dsa:70,
//         java:55
//     }
// }
// console.log(obj.marks.dsa)

//function of object
  
const obj2={
    name: 'sam',
    age: 12,
    greet:function(){console.log(this.name)}, //function of object
    hobbies: ["gaming", "drawing"]
}
obj2.greet()
console.log(obj2.hobbies[1])