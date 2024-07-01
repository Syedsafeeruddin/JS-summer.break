// object literals
// Object.create


const myObject = {
    name : 'safeer',
    age: 20,
    location : 'karachi',
    email : 'saf@gmail.com'
}

// console.log(myObject.name); // can be accessed like this but this ain't recommended
// console.log(myObject.["name"]); // can be accessed like this but this ain't recommended

// myObject.age = 19; // values can be over written like this 
// Object.freeze(myObject) // now no changes can be done to 'myObject'

// Create a function using an object 

// myObject.Book = function(){
//     console.log("The Book is Deep Work");
// }

// myObject.Book();

myObject.CNIC = function(){
    console.log(`Hello ${this.name}, how are you?`); // referencing in an object
}

myObject.CNIC();