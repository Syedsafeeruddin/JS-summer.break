// object literals
// Object.create


// const myObject = {
//     name : 'safeer',
//     age: 20,
//     location : 'karachi',
//     email : 'saf@gmail.com'
// }

// console.log(myObject.name); // can be accessed like this but this ain't recommended
// console.log(myObject.["name"]); // can be accessed like this but this ain't recommended

// myObject.age = 19; // values can be over written like this 
// Object.freeze(myObject) // now no changes can be done to 'myObject'

// Create a function using an object 

// myObject.Book = function(){
//     console.log("The Book is Deep Work");
// }

// myObject.Book();

// myObject.CNIC = function(){
//     console.log(`Hello ${this.name}, how are you?`); // referencing in an object
// }

// myObject.CNIC(); 


// const myObject = new Object() ---> singelton Object
// const myObject = {} ---> non-aingelton Object

// const myObject = {
//     age : 20,
//     anotherObject : {
//         anotherObject : {
//             name : 'Safeeeeeeeeeer'
//         }
//     }

// }

// console.log(myObject.anotherObject.anotherObject.name); // accessing object within object
// console.log(myObject.anotherObject?.anotherObject.name); // '?' for if there is any value

// const obj1 = {1 : "A", 2 : "B"}
// const obj2 = {3 : "Y", 4 : "Z"}

// // const obj3 = {obj1 , obj2}
// // const obj3 = Object.assign({}, obj1,obj2) // or you can remove {}
// const obj3 = {...obj1,...obj2}

// console.log(obj3);

// const myArray = [  // multiple objects within an array
//     {
//         name : 'safeer',
//         age : 20
//     },
//     {
//         name : 'ali',
//         age : 19
//     },
//     {
//         name : 'abc',
//         age : 123   
//     }
// ]

// console.log(myArray[2].name);

// console.log(Object.keys(myArray));
// console.log(Object.values(myArray));


// const obj = {
//     name : 'safeer',
//     age : 20
// }
// console.log(obj.hasOwnProperty('age'));

// const Game = {
//     name : 'GTA VI',
//     price : 1000,
//     owner : 'Rockstar'
// }

// console.log(Game.name); ---> there is a better way

// here we are destructuring an object 
// if there is a value in an object that is difficult to write again & again 
// const {price : pri} = Game // we use this method where after semi-colons we give it a new short name and then call it by new name
// console.log(pri );


// object structure of an API/ JSON API
// {
//     "name" : "safeer",
//     "age" : 20,
//     "university" : "KIET"
// }

// array structure of an API/ JSON API

// [
//     {},
//     {},
//     {}
// ]