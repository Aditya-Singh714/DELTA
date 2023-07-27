// ques 1
let arr = [2, 4, 6, 8, 10];
let square = arr.map((sqr) => {
  return sqr * sqr;
});
console.log(arr);
console.log(square);

let sum = square.reduce((acc, num) => {
  return acc + num;
});
console.log("The sum of square array is ", sum);

let avg = sum / square.length;
console.log("The average is ", avg);

// ques 2
let arr2 = [12, 5, -56, -40, 2, 10];
let newArr = arr2.map((el) => {
  return el + 5;
});
console.log(arr2);
console.log(newArr);

// ques 3
let str = ["tony", "peter", "steve", "thor", "loki", "bruce"];
let newStr = str.map((string) => {
  return string.toUpperCase();
});
console.log(str);
console.log(newStr);

// ques 4
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((value) => value * 2),
];
console.log(doubleAndReturnArgs([4, 6, 8], 15, 65));
console.log(doubleAndReturnArgs([54], 25, 22));

// ques 5
const mergeObjects = (obj1, obj2) => ({
  ...obj1,
  ...obj2,
});

console.log(mergeObjects(
  { name: "Tony", character: "Iron-Man" },
  { name: "Steve", character: "Captain America" }
));
