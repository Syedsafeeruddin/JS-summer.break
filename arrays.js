// Shallow Copy share the same reference point
// Deep Copy does not share the same reference point


// const myArray = [1,2,3,4,5]
// console.log(myArray[4]);

const myPlayers = ['leo', 'ney', 'cris', 'ibra', 'lewa'];
const spanish = ['xavi', 'xabi', 'iniesta' ,'pedro', 'busi']

// myPlayers.push('benz') // when to add something in an array
// myPlayers.pop() // removes the last item of an array
// myPlayers.unshift('xavi') // add value to the beginning 
// myPlayers.shift() // removes the first value of an array
// console.log(myPlayers.includes('dinho')); // ask if the value given is found in the array
// console.log(myPlayers.indexOf('lewa')); // returns the index of the given value in the array
// const newPlayers = myPlayers.join(); // this changes the typeof of an array to string
// console.log(myPlayers); // output => [ 'leo', 'ney', 'cris', 'ibra', 'lewa' ]
// console.log(newPlayers); // output => leo,ney,cris,ibra,lewa
// const newPlayers = myPlayers.slice(2,4) // returns the first value given to the last but does not print the last one
// const newPlay = myPlayers.splice(2,4) // returns the range and manupilates the original array by not printing the values given in splice



const allPlayers = [...myPlayers, ...spanish] // '...' this is spread operator as it spreads our array values into individual ones
                                              // we can also use 'Concat'
 
console.log(allPlayers);