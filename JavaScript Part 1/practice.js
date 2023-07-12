// Practice ques
// Create a traffic light system that shows what to do based on color

let color = "Green";

if (color === "Red") {
  console.log("It means to stop");
}

if (color === "Yellow") {
  console.log("It means to slow down");
}

if (color === "Green") {
  console.log("It means to go");
}

// Practice ques 2
// Create a system to calculate popcorn prices based on the size customer asked for:
let size = "S";

if (size === "XL") {
  console.log("Price is Rs.250");
} else if (size === "L") {
  console.log("Price is Rs.200");
} else if (size === "M") {
  console.log("Price is Rs.100");
} else {
  console.log("Price is Rs.50");
}

// Practice ques 3
// A "good string" is a string that starts with the letter 'a' & has a length > 3.
// Write a program to find if a string is good or not

let str = "app";
if (str[0] === "a" && str.length > 3) {
  console.log("Good string");
} else {
  console.log("Bad string");
}

let _num = 12;
if (_num % 3 === 0 && (_num + 1 == 15 || _num - 1 == 11)) {
  console.log("Safe");
} else {
  console.log("Unsafe");
}

// Practice ques 4
//Use switch statement to print the day of the week using a number varaible 'day' with value 1 to 7

let day = 7;
switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thrusday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Sarturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Number is invalid");
}
