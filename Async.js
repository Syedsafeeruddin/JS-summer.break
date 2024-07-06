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