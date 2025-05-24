// let a = 4;
// function fun() {
//     let a = 5
//     console.log(a)
// }
// fun()
let a = 100;

function App() {
    console.log("1", a); // 100 (global a)

    let b = 42; // different name to avoid shadowing
    console.log("2", b); // 42

    {
        var v = 100;
    }

    console.log("3", a); // 100 (still global a)
}
App();
