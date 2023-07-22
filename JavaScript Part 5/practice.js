/* Practice question */

// function to print poem
 function printPoem(){
    console.log(`Nature's first green is gold 🪙,
    Her hardest hue to hold.
    Her early leaf's 🌿 a flower 🌹;
    But only so an hour ⌚
    `);
}
printPoem();

// function to print number on dice
function diceRoll(){
    let randomNum = Math.floor(Math.random() * 6) +1 ;
    console.log("Number on dice is ", randomNum);
}
diceRoll();

// function to print average of 3 numbers
function printAverage(num1, num2, num3){
    const avg = (num1+num2+num3)/3; // calculate the sum
    console.log(`Average of ${num1}, ${num2} and ${num3} is ${avg}`);
}
printAverage(54,54,9);

// function to print table of any number
function printTable(num1){
    // for(let i=1;i<=10;++i){
    //     console.log(`${num1} x ${i} = ${num1*i}`)
    // }
    for(let i = num1; i <= num1*10; i += num1){
        console.log(i);
    }
}
printTable(5);

// sum of number
function sumOfNumber(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return `The sum of numbers 1 to ${num} is ${sum}`;
}

console.log(sumOfNumber(55));

// returns concatenation of all strings in an array
let str = ["Wake ", "up ", "to ", "reality "];
function concatString(str){
    let result= "" ;

    for(let i = 0; i < str.length; i++){
        result += str[i];
    }

    return `The concatenation of array of string is "${result}"`;
}
console.log(concatString(str));

// guess the output
let greet = "Hello"; // global scope

function changeGreet(){
    let greet = "Namaste"; // function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet); // lexical scope
    }
}
console.log(greet);
changeGreet();