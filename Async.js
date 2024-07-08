// Javascript is synchronous language that means its code is executed one line at a time
// it is a single threaded language, these are the behaviour of Default Javascript



// ----------- EXECUTION CONTEXT ------------
// javascript runs a file in two phases ---> Memory Creation Phase, Execution Phase
// 1. Global Execution Context (this KEYWORD) 
// 2. Function Execution Context  
// 3. Eval Execution Context

// A CODE EXAMPLE 
// let val1 = 10;
// let val2 = 5;

// function Addition(num1, num2){
//     let total = num1 + num2;
//     return total
// }

// let result1 = console.log(Addition(val1, val2));
// let result2 = console.log(Addition(2, 8));

// EXECUTION PHASE OF THIS CODE :
// 1. Global Execution (this Keyword)
// 2. Memory Creation Phase
// 3. Execution Phase 

// Blocking Code vs Non-blocking Code
// 1. Blocking code blocks the execution of program to read file while the non-blocking code continues the execution of the program 
//  while it reads a file 
// ----------------------------------------------------------------------------------------------------------------------------------

//  Following is the example of Async programming
// console.log("H");
// console.log("He");
// setTimeout(() => {  // (setTimeout) esa function jo time leta hai, 1 sec = 1000 ms
//     console.log("bhaggg"); 
// }, 3000)
// console.log("Hel");
// console.log("Hell");
// console.log("Hello");

// CALLBACK is an argument to another function 

// function Add(a, b) {
//     console.log(a + b);
// }

// function Greetings (a, b, AddCallback){
//     AddCallback(a,b);
// }

// Greetings(5,4,Add);


// function getData(DataID, NextData){
//     setTimeout(() => {
//         console.log(`Data : ${DataID}`);
//         if(NextData){
//             NextData();
//         }
//     }, 2000)
// }

// // This is Callback Hell (Nested Callbacks)
// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// })

// PROMISE is an Object in Javascript having 3 states pending, result, reject 

// let promise = new Promise((resolve, reject) => {
//     console.log("I'm a promise");
//     resolve("DONE")
//     reject("ERROR 404")
// })

// console.log(promise);

// function getData(DataID, NextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Data : ${DataID}`);
//             resolve("Success");
//             if(NextData){
//                 NextData();
//             }
//         }, 2000)
//     })
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// })

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log('This is a promise');
//         // resolve('--- Success')
//         reject('--- Error')
//     })
// }

// let newPromise = getPromise();
// newPromise.then((res) => {
//     console.log("Successfull", res);  // .then if promise is resolved
// })  

// newPromise.catch((err) => {
//     console.log("Error 404", err);  // .catch if promise is reject
// })

// function AsyncFun1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("DATA1");
//             resolve('suss')
//         }, 3000)
//     })
// }

// function AsyncFun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve('suss')
//         }, 3000)
//     })
// }


// AsyncFun1().then((res) => {
//     console.log("Fetching Data");
//     AsyncFun2().then((res) => {
//         console.log("Fetching Data");
//     })
// })
// AsyncFun();


function getData(DataID, NextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data : ${DataID}`);
            resolve("Success");
            if(NextData){
                NextData();
            }
        }, 2000)
    })
}

getData(15723).then((res) => {
    console.log(res);
    getData(15925).then((res) => {
        console.log(res);
    })
})





