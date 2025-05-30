// let myPromise = new Promise(function(resolve, reject){
//     console.log("hello")
//     resolve(100)
//     //reject(new error("internl server error"))
// })

// console.log(myPromise)

let firstPromise=new Promise((resolve, reject)=>{
    setTimeout(function sayhello(){
        console.log("hello")
        resolve(1)
    }, 3000)
})
console.log(firstPromise)