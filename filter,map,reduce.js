// const myArray = ['one', "two", "three", "four", "five"];

// const print = myArray.forEach((index) => {  // foreach doesn't return any value
//     console.log(index);
// })

// console.log(print);

// FILTER 

// const Num = [1,2,3,4,5,6,7,8,9,10]

// const newNum = Num.filter((index) => index >= 5)
// console.log(newNum);

// MAP

// const Num = [1,2,3,4,5,6,7,8,9,10]

// const newNum = Num.map((index) => {return index *4})
// console.log(newNum);


// CHAINING 

// const Num = [1,2,3,4,5,6,7,8,9,10]

// const newNum = Num.map((index) => {return index *4}).filter((index) => (index > 20)).map((index) => (index += 10))
// console.log(newNum);

// REDUCE

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10


const Num = [10,20,30,783,283]

const iniVal = 0;
const sumWithIni = Num.reduce((acc, currValue) => acc + currValue, 0)
console.log(sumWithIni);