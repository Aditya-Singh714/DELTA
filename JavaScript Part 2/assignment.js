// ques 1
let arr = [10, 15, 20, 25, 3];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans);

// ques 2
let arr2 = [57, 91, 20, -12];
let ans2 = arr2.slice(arr2.length - n);
console.log(ans2);

// ques 3
let str = prompt("Please enter a string");
if (str.length == 0) {
  console.log("String is empty");
} else {
  console.log("String is not empty");
}

// ques 4
let str2 = "ApNa CoLlEgE";
let idx = 3;
if (str[idx] == str2[idx].toLowerCase()) {
  console.log("Character is lowercase");
} else {
  console.log("Character is not lowercase");
}

// ques 5
let str3 = prompt("Please enter a string");
console.log(`Original string = ${str3}`);
console.log(`String without spaces = ${str3.trim()}`);

// ques 6
let arr3 = ["hello", "a", 23, 64, 99, -6];
let item = 64;
if (arr3.indexOf(item) != -1) {
  console.log("Element exists in array");
} else {
  console.log("Element doesn't exist in array");
}
