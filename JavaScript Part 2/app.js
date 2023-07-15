/* Stirng Methods */

// trim.() method
let msg = "   Hello!   ";
console.log(msg);
console.log(msg.trim());

// let password = prompt("Enter your password");
// console.log(password);
// let newPass = password.trim();
// console.log(newPass)

// uppercase and lowercase method
let str = "   Tony Stark";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// string with arguments
let code = "ILoveCoding";
console.log(code.indexOf("Love"));
console.log(code.indexOf("e"));
console.log(code.indexOf("c"));
console.log(code.indexOf("I"));

// chaining
console.log(str);
let newStr = str.trim().toUpperCase();
console.log(newStr);

// slice method
let newCode = code.slice(1,5);
console.log(newCode);

// replace and repeat method
let newCode1 = code.replace("Love", "Do");
console.log(code);
console.log(newCode1);

let love = "I Love BGMI!";
console.log(love);
console.log(love.repeat(3));