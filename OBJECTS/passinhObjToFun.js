// const book={
//     title:"RS AGGARWAL",
//     author:"Rsssss",
//     pages:250,
// }

// // how to pass this obj in function
// function getBookDetails(obj){
//     return `${obj.title} ${obj.author} ${obj.pages}`
// }
// console.log(getBookDetails(book)) // call function 

const person={
    name:"sakshi",
    age:"20",
    department: "CSE",
}

// // how to pass this obj in function
function x(personObj, newdepart){
    personObj.department=newdepart  //update the department
    return personObj  //return the updatd department
}
console.log(x(person, "mech")) // call function 

// to updated edxisting age
// const person = {
//     name: "Sakshi",
//     age: 30
// };
// person.age = 35;  // Or any new value
// //  updated object
// console.log(person);
