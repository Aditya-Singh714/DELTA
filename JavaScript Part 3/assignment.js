// ques 1
let arr = [6, 9, 4, 5, 6, 7, 11, 245];
let num = 2;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    arr.splice(i, 1);
  }
}
console.log(arr);

// ques 2
let number = 25542445;
let count = 0;
let count2 = number;
while (count2 > 0) {
  count++;
  count2 = Math.floor(count2 / 10);
}
console.log(count);

// ques 3
let number2 = 946825;
let sum = 0;
let sum2 = number;
while (sum2 > 0) {
  digit = sum2 % 10;
  sum += digit;
  sum2 = Math.floor(sum2 / 10);
}
console.log(sum);

// ques 4
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`Factorial of ${n} is ${factorial}`);

// ques 5
let arr2 = [21, 56, 66, 69, 55, 88, 999, 4144];
let largestNo = 0;
for (let i = 0; i <= arr.length; i++) {
  if (largestNo < arr[i]) {
    largestNo = arr[i];
  }
}
console.log(largestNo);