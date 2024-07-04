// Object literal means literally an object 

// const Student = {
//     SID : 15723,
//     Name : "Syed Safeer Uddin",
//     Age : 20,

//     getStudentInfo : function(){
//         console.log(`Name : ${this.Name}`);
//     }
// }

// Student.getStudentInfo();

// to write this code again n again is difficult to many user so we use CONSTRUCTOR Functions

// function Student(Name, Age, SID){
//     this.Name = Name;
//     this.Age = Age;
//     this.SID = SID;
// }

// const StudentOne = new Student('Safeer', 20, 15723)
// console.log(StudentOne);


// - CLASS

// class Student{
//     constructor(name, sid, age){
//         this.name = name;
//         this.sid = sid;
//         this.age = age
//     }
    
//     allNames(){
//         return `${this.name.toUpperCase()}`
//     }
// }

// const stdOne = new Student('safeer', 15711, 20)
// console.log(stdOne.allNames());


class parent {
    constructor(name){
        this.name = name;
    }

    callName(){
        return `The name is ${this.name}`
    }
}

class child extends parent{ // here extends mean inheritance just like ":" in OOP
    constructor(name, age){
        super(name)
        this.age = age
    }

    noName(){
       return `Hellllllllllllllllllllllllllllllllllo, ${this.name}`
    }

}

const childOne = new child("Safeer", 20)
console.log(childOne.noName());

const par1 = new parent("safeer")
console.log(par1);


