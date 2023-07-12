// Ques 1
let num = prompt("Enter the numeric value: ");
if (num % 10 == 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

// Ques 2
let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
alert(`Hello ${name}, you are ${age}.`);

// Ques 3
let quater = prompt("Enter the number between 1 to 4");
switch (quater) {
  case "1":
    console.log("January, February, March");
    break;

  case "2":
    console.log("April,May,June");
    break;

  case "3":
    console.log("July,August,September");
    break;

  case "4":
    console.log("October,November,December");
    break;

  default:
    console.log("You have enter wrong number");
}

// Ques 4
let str = prompt("Enter any string: ");
if((str[0] === 'A' || str[0] === 'a') && (str.length > 5)){
    console.log("Golden string");
} else{
    console.log("Not a golden string");
}

// Ques 5 
let x = prompt("Enter the numeric value for x: ");
let y = prompt("Enter the numeric value for y: ");
let z = prompt("Enter the numeric value for z: ");

if(x > y && x > z){
    console.log("x is greatest");
}
else if (y > z && y > x){
    console.log("y is greatest");
}
else{
    console.log("z is greatest");
}

// Ques 6
let a = prompt('Enter a first integer: ');
let b = prompt('Enter a second integer: ');

// to find last digit
let result1 = a % 10;
let result2 = b % 10;

// compare the last digits
if(result1 == result2) {
    console.log(`${a}, ${b} have the same last digit.`);
}
else {
    console.log(`${a}, ${b} have different last digit.`);
}
