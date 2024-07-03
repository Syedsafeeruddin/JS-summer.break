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

function Student(Name, Age, SID){
    this.Name = Name;
    this.Age = Age;
    this.SID = SID;
}

const StudentOne = new Student('Safeer', 20, 15723)
console.log(StudentOne);
