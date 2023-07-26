/* Array methods */

// forEach method
let arr = [1,2,3,4,5,6];

// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);
// OR
// arr.forEach(function(el){
//     console.log(el);
// });

// using aarow function
arr.forEach( (el) => {
    console.log(el);
});

// can also be used on objects
let cars = [{
    make: "Toyota",
    model: "Supra MK4",
},
{
    make: "Ford",
    model: "Mustang 1986", 
}, 
{
    make : "Koenigsegg",
    model : "Gamera"
}];
console.log(cars);

cars.forEach((car) => {
    console.log(car.model);
});

// map function
let num = [2,4,6,8,10];
let sq = num.map(function(n){
    return n*n;
});
console.log(sq);

// filter function
let nums = [5, 4, 23, 41, 12, 65, 42, 32, 80, 69];
let evenNo = nums.filter((num) => {
    return num%2==0;
});
console.log(evenNo); 

// every function
let arr1 = [22, 42, 69, 87];
let everyFunction = arr1.every((num) => {
    return num % 2 != 0;
});
console.log(everyFunction);

// some function
let someFunction = arr1.some((el) => {
    return el%2 == 0;
});
console.log(someFunction);

// reduce function
let arr2 = [1,5,6,4,3,7,9,8];
let reduceFunction = arr2.reduce((res, el) => {
    console.log(res);
    return res+el;
});
console.log(reduceFunction);

// maximum in array using reduce function
let number = [1,21,69,88,99,450,546,125];
let max = number.reduce((max, el) =>{
    if(max < el){
        return el;
    } else{
        return max;
    }
});

console.log(max);

// practice ques 1
// check if all numbers are mupltiple of 10 or not
let numb = [10,20,50,100,530,60];
let multipl_10 = numb.every((num) => {
    return num%10 == 0;
});
console.log(multipl_10);

//practice ques 2
// find min number in an array
let minArr = [10,11,21,4,5,1,8];
let min = minArr.reduce((min,el) =>{
    if(min > el){
        return el;
    } else{
        return min;
    }
});
console.log(min);

// default parameters
function multiply(a, b = 6){
    return a*b;
}
console.log(multiply(5,4)); // without default 
console.log(multiply(7)); // with default

function sum(a = 5, b){
    return a+b;
}
console.log(sum(4,6)); // without default 
console.log(sum(6)); // with default

// spread function
// operator ... to pass multiple arguments as individual elements into the parameter list for functions that accept variable length argument
let array = [1,10,25,45,69,88,52,35];
console.log(Math.min(... array));
console.log(Math.max(... array));
console.log(... array);

let str = "Koenigsegg";
console.log(... str);

// spread(array literals)
let array2 = [1,5,7,9,3,13];
let NewArr = [...array2];
console.log(array2);
console.log(NewArr);

let str2 = "Mustang";
let char = [...str2];
console.log(str2);
console.log(char);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let nums2 = [...odd, ...even];
console.log(odd);
console.log(even);
console.log(nums2);

// spread(object literals)
const person = {
    name: 'John',
    age : 30,
    email : "johndalton689@gmail.com"
};

const dataCopy = {...person, country :"Australia"};
console.log(dataCopy);

let obj1 = {...even};
console.log(obj1);

// rest function
//(spread operator inside the parameters of another functions )
function add(...agrs){
    return agrs.reduce((sum ,el) =>{
        return sum+el;
    });
}

let sums = [1,5,6,7,9];
console.log("Sum is ",add(...sums));

// destructuring 
let names = ["Tony", "Peter", "Steve", "Bruce", "Thor", "Loki", "Hawkeye", "Dr Strange"];
let [winner, runnerUp, secondRunnerUp, ...others] = names;
console.log(winner);
console.log(runnerUp);
console.log(secondRunnerUp);
console.log(others);

// destructuring for obejects
const student = {
    name : "Karan",
    age : 19,
    class :12,
    subjects : ["Physics", "Chemistry", "Maths", "English"],
    username : "karan@6988",
    password : "dalton@123",
};

let {username : user, subjects, password : key, city = "Meerut"} = student;
console.log(user);
console.log(subjects);
console.log(key);
console.log(city); // default parameter
console.log(student);
