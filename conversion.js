let age = "";
console.log(typeof age);


let IsNumber = Number(age)
console.log(typeof IsNumber);
console.log(IsNumber);

// '33' => 33
// '33abc' => NaN
// true => 1; false => 0;


//let IsNumber = Boolean(age)
console.log(typeof IsNumber);
console.log(IsNumber);


// Explicit Conversion so Type Casting
let a = '5';
let b = 9;
let c = (Number(a) + b)
console.log(c);


// Implicit Conversion so Coercion
const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum);

