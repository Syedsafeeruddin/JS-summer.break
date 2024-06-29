// for (let index = 1; index <= 5; index++) {
//     const element = 'Haloo';
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (i == 8) {
//         console.log("YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
//     }
//     console.log(i);
// }


// NESTED LOOPS

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer Loop : ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i*j}`);
//         // printing tables till 9
        
//     }
    
// }

// let myArray = ["leo","cris","ney","sergio"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// BREAK Keyword
// for (let index = 0; index <= 19; index++) {
//     if (index == 9) {
//         console.log("Number 9 detected, loops break!");
//         break
//     }
//     const element = index;
//     console.log(element);
    
// }
// console.log('---------------------------------------------------------------------------');
// CONTINUE Keyword
// for (let index = 1; index <= 20; index++) {
//     if (index == 10) {
//         console.log("Number 10 detected");
//         continue
//     }
//     const element = index;
//     console.log(element);
    
// }

// let num = 0;
// while (num <= 15) {
//     console.log(`Answer is ${num}`);
//     num = num + 3;
// }

// let abc = 1;
// do {
//     console.log("Hallo");
//     abc++
// } while (abc <= 10);

// const myArray = [1,2,3,4,5]

// for (const index of myArray) {
//     console.log(index);
// }


// const name = 'Syed Safeer Uddin'
// for (const names of name) {
//     if (names == " ") {
//         console.log("space found");
//         continue
//     }
//     console.log(`Letters are ${names}`);
// }

const numbers = [45, 4, 9, 16, 25];

let txt = "no";
for (let x in numbers) {
  txt += numbers[x]; 
}
