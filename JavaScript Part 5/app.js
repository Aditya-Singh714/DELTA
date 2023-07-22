/* Functions in JavaScript */

// defining a function
function hello(){
    console.log("Hello! I am full stack developer");
}
// calling a function
hello();

// print 1 to 10 using function
function print1to10(){
    for(let i = 0; i <= 10; i++){
        console.log(i);
    }
}
print1to10();

// function to find whether you are adult or not
function isAdult(){
    // let age = prompt("Enter your age:");
    let age = 20;
    if(age >= 18){
        console.log("You are adult");
    } else{
        console.log("You are not adult");
    }
}
isAdult();

// function with arguments and return value

// print name
function printName(name){
    console.log("My name is ", name);
}
printName("Oppenhiemer");

// function to print sum 
function printSum(num1, num2){
    const result = parseInt(num1) + parseInt(num2);
    console.log(`Sum of ${num1} and ${num2} is ${result}`);
}
printSum(85,56);

// use of reutrn keyword and use console.log to get output
// if we try something after return that would not work or execute

// function to print product
function multiplyNumbers(num1, num2){
    const result = parseFloat((parseInt(num1)*parseFloat(num2)));
    return `Product of ${num1} and ${num2} is: ${result}`;
}
console.log(multiplyNumbers(5, 4));

// fuction expression == nameless function
const power = function(x, y){
    return x**y;
}
console.log(power(3,4));

let say = function(){
    console.log("Wake up to Reality")
}
console.log(say());

// higher order functions
function multipleLine(func, count){
    for (let i=0 ; i<count ; i++){
        func();
    }
}
let line = function(){
    console.log("Wake up to reality");
}
// always sent definition of function like "line" not "line()"
// if we sent line() like this i.e we are executing the function or calling the function
multipleLine(line, 100);

// higher order function with retrun keyword
