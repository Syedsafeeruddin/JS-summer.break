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
for (let index = 0; index <= 19; index++) {
    if (index == 9) {
        console.log("Number 9 detected, loops break!");
        break
    }
    const element = index;
    console.log(element);
    
}
console.log('---------------------------------------------------------------------------');
// CONTINUE Keyword
for (let index = 1; index <= 20; index++) {
    if (index == 10) {
        console.log("Number 10 detected");
        continue
    }
    const element = index;
    console.log(element);
    
}