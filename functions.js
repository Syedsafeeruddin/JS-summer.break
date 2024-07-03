// function myFunction() {
//     console.log('s');
//     console.log('a');
//     console.log('f');
//     console.log('e');
//     console.log('e');
//     console.log('r');
// }
// myFunction ---> this is Reference
// myFunction() ---> this is execution\

// function Addition(num1, num2) {
//     let result = num1 + num2;
//     console.log(`Result is ${result}`);
//     return result
// }

// Addition(2,9)

// function LogIn(user) {
//     if (!user) {
//         console.log("Please enter a username");
//     }
//      console.log(`${user} just logged in`);
//      return
// }
// LogIn('safeer');

// function addItems(params) {
    
// }

// function myFunction(){
//     console.log(this);
// }

// myFunction();

// const myFunction = function(){
//     console.log('a function');
// }
// myFunction();

// this is a simple function
// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(2,3));


// // this is an arrow function
// const ADD = (num1, num2) => {
//     return num1 + num2  
// }
// console.log(ADD(4,5));

// const addTwo = (num1, num2) => console.log((num1 + num2)) // implicit return, here we can't use return keyword

// addTwo(4,4)

// Immedialy Invoked Function Expression (IIFE)

// function myFunction(){
//     console.log("Hallo"); // This is a simple function with its execution
// }
// myFunction()

// IIFE

// (function myFunction(){
//     console.log("Hello"); // For IIFE we wrap our function around with '()' with (execution) immediately after
// })()

// a semi-colon is a must after IIFE 

( (name) => {
    console.log(`Hello ${name}`);
})('Safeer')