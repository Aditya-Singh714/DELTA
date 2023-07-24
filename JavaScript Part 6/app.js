// using this keyword
let student = {
    name : "Aditya",
    age : 21,
    eng : 85,
    maths : 95,
    phy : 90,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.maths + this.phy)/3;
        console.log(avg);
    }
};
console.log(student.getAvg());

// try and catch
console.log("Wake up to reality");
console.log("Nothing goes as planned in this world");
// console.log(a);
// let a = 106;
try{
    console.log(a);
} catch(error){
    console.log("Caught an error ... a is not defined");
    console.error(error);
}
console.log("Love is more twisted curse");
console.log("Jiraiya : The Lengendary Sainin");

// arrow functions
const multiply = (a ,b) =>{
    return a * b ;
}
console.log(`The result of multiplication ${multiply(4,7)}`);

const cube = (n) =>{
    return n*n*n;
}
console.log(cube(4));

const power = (x,y) =>{
    return x**y;
}
console.log(power(4,4));

// implicit arrow function
const sum = (a, b) =>(
    a+b
)
console.log(sum(5,54));

// set timeout function
console.log("All in now");

// setTimeout( () => {
//     console.log("Nothing is gone has planned in this world");
// }, 4000); //  we wait 4sec to execute the function

console.log("Wake up to reality"); // this line will execute before that function

// set interval function
// let id = setInterval(() => {
//     console.log("Hello Kakashi");
// }, 3000);

// arrow function with this keyword
const stu = {
    name : "Aditya",
    marks : 90,
    prop : this, // global scope

    getName : function(){
        console.log(this); 
        return this.name;
    },
    getMarks : () =>{
        console.log(this) // parent scope -> window
        return this.marks;
    },

    getInfo1 : function(){
        setTimeout(() =>{
            console.log("DELTA", this); // stu value
        }, 2000);
    },

    getInfo2 : function(){
        setTimeout(function(){
            console.log("APLHA", this); // window value
        },2000);
    },
};

console.log(stu.getName());
console.log(stu.getMarks());

console.log(stu.getInfo1());
console.log(stu.getInfo2());

// practice ques
// arrow function to return square of a number
const square = num => (
    num*num
)
console.log(square(5));

//function to print "hello world" 5 times at intervals of 2s each
let id = setInterval(() => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Hello world 5 times completed");
}, 10000);
