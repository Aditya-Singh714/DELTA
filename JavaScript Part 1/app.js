console.log("Hello World!");
console.log("DELTA");

let a = 10;
let b = 54;

console.log("Sum is : ", a+b);
console.log("Product is : ", a*b);

let pencilPrice = 10;
let eraserPrice = 10;
// let output = "The total price is : " + {pencilPrice + eraserPrice} + "Rupees";
// console.log("The total price is : ", pencilPrice+eraserPrice , "Ruppes");

let output = `The total price is : ${pencilPrice +eraserPrice} Rupees`;
console.log(output);

// Operation is JS
// can be performed on different data types like numbers, strings and arrays etc..

/* Arithmetic Operations */
let x = 10;
let y = 3;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

/* Unary Operator */
console.log(a++);
console.log(++a)

/* Assignment Operator */
let z=20; // assigning value to variable 'z' using assignment operator '='
console.log(z*=10);
console.log(z+=20);

/* Comparison Operator */
let c = 23;
let d = 69;
console.log(c < d);
console.log(c <= d);
console.log(c >= d);
console.log(c > d);
console.log(c != d);
console.log(c == d);

/* Conditional Statements */
// if statement
console.log("before if statement");
let age = 18;
if (age>=18){
    console.log("You are eligile to vote");
}

console.log("after if statement");


/* else if statement */
if(age >=18){
    console.log("You can apply for driving license");
}
else if(age < 18){
    console.log("You are not eligile for driving license");
}

/* else statement */
let marks = 32;
if(marks >= 33){
    console.log("You are passed");
} 
else{
    console.log("Sorry! you failed. Better luck next time")
}

/* Nested if else */
let _marks = 90;
if(_marks>=33 ){
    console.log("Pass");
    if(_marks >= 80){
        console.log("Grade : O");
    }else{
        console.log("Grade : A");
    }
}
else{
    console.log("Fail");
}

/* Logical Operators */
//  Logical AND(&&)
let mark = 90;
if(mark >= 33 && mark >=90){
    console.log("Pass");
    console.log("A+")
}

//Logical OR(||)
let grade = 'B';
if((grade == "A+" || grade=="B")){
    console.log("You passed");
}

// Logical NOT(!)
let num = 10

if(!(num >  9)){
    console.log("Hello")
}

/* Switch statement */
let clr = "green";
switch (clr) {
    case "red":
        console.log('Stop');
        break;

    case "yellow" :
        console.log("slow down");
        break;

    case "green" :
        console.log("go");
        break;
        
    default :
        console.log("Invalid color selected.");
}

/* alert */
alert("Hello");
console.error("This is an error msg");
console.warn("This is an warning msg");

/* prompt */
prompt("How's your day, buddy?")
let _name = prompt("What's your name buddy??")
console.log(_name);