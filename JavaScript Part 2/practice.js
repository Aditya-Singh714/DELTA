// Ques 1
// trim and convert string it to uppercase

let msg = "   Help!   ";
console.log(msg);
let newMsg = msg.trim().toUpperCase(); // HELP
console.log(newMsg);

// Ques 2
// pridict the output

let college = "ApnaCollege";
console.log(college.slice(4,9));
console.log(college.indexOf("na"));
console.log(college.replace("Apna", "Our"));

// Ques 3
let str1 = college.slice(4).replace('l', 't');
console.log(str1);
console.log(str1.replace('l', 't'));

// Ques 4
// start : [january, july, march, august]
// final : [july, june, march, august]

let months = ["January", "July", "March", "August"];
console.log(months);
months.shift();
months.shift();
months.unshift("Jume");
months.unshift("July");
console.log(months);

// Ques 5
// start : [january, july, march, august]
// final : [july, june, march, august]
// using splice

let month = ["January", "July", "March", "August"];
console.log(month);
month.splice(0,2, "July", "June");
console.log(month);

let language = ["C", "C++", "HTML", "JavaScript", "Python", "Java", "C#", "SQL"];
console.log(language);
console.log(language.indexOf("JavaScript"));
language.reverse();
console.log(language);
console.log(language.indexOf("JavaScript"));

// Ques 6
// create a nested array to show tic tac toe state

let ticTacToe = [['X', null, "O"], [null, 'X', null], ['O', null, 'X']];
console.log(ticTacToe); 
ticTacToe[0][1] = 'O';
console.log(ticTacToe);