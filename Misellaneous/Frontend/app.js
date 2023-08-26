// let arr = [1,2,3,4,5];

// arr.sayHello = () =>{
//     console.log("Hello JS I am array");
// }
// console.log(arr);

// function personMaker(name, age){  // factory function
//     const person = {
//         name: name,
//         age : age, 
//         talk(){
//             console.log(`Hi, I am ${name}, nice to meet you`);
//         },
//     };
//     return person;
// }

// let p1 = personMaker("Luficer", 25);


// Constructors -> doesn't return anything and start with capital letter
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`Hi, I am ${this.name}, nice to meet you`);
// };


// Classes
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         console.log(`Hi, I am ${this.name}, nice to meet you`);
//     }
// }

// let person1 = new Person("Lucifer", 25);
// let person2 = new Person("Chloe", 23);


// Inheritance
class Person{
    constructor(name, age){
        console.log("Parent class constructor");
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi, I am ${this.name}, nice to meet you`);
    }
}

class Student extends Person{
    constructor(name, age, makrs){
        console.log("Student class constructor");
        super(name, age); // parent class constructor is being called
        this.makrs = makrs;
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        console.log("Teacher class constructor");
        super(name. age); // parent class constructor is being called
        this.subject = subject;
    }
}
