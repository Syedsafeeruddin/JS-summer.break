console.log(NaN === NaN);
console.log(0 === -0);

// Object.is() overcomes limitations of '===' 
console.log(Object.is(NaN === NaN));
console.log(Object.is(0 === -0));