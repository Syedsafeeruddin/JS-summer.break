// CONTROL FLOW

// let age = 10;
// if (age > 18){
//     console.log("18+");
// }
// else{
//     console.log("not 18");
// }


// let score = 100;
// if(score > 98){
//     let team = 'RCB!'
//     console.log('Teams wins:',team);
// }


// const marks = 80;
// if (marks == 60) {
//     console.log('C grade');
// }
// else if(marks == 70){
//     console.log('B grade');
// }
// else if(marks == 80){
//     console.log('A grade');
// }
// else{
//     console.log('A+ grade');
// }

// let marks = 98
// if(marks >= 90 || marks == 100){
//     console.log("Highest");
// }

// let day = 4;
// switch (day) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;

//     default:
//         console.log("ERROR");
//         break;
// }

// const email = "saf@gmail.com"; --- this is a truthy value as we have assumed it that it iz a true value
// if (email){
//     console.log('Got eamil');
// }
// else{
//     console.log('did not get email');
// }

// falsy values are the ones we assume are going to be false
// false, 0, -0, BigInt, "", null, undefined, NaN
// apart from these are truthy values also turthy values are stored as a String

// Nullish Coalescing Operator '??'
//  it will return the left value as long as the left value is not 'null' of 'undefined'

// const foo = null ?? 'default string';
// console.log(foo);
// Expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// Expected output: 0

let temp;
temp = null ?? undefined ?? 20;
console.log(temp);