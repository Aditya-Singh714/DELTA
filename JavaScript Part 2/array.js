// Arrays

let students = ["Amit", "Akhil", "Nitya", "Aditya", "Akshat"];
console.log(students);

let nums = [1,2,3,4,5];
console.log(nums);

console.log(typeof(students));

let marks = [90, 35, 88, 75, 99, 86];

let info = ["Aditya", 21, 91.5];
console.log(info)
console.log(info[0][0]); //print characters 
console.log(info[0].length);

// empty array
let empArr = [];
console.log(empArr);

// Arrays are mutable
let names = ["Tony", "Thor", "Spider-Man"];
console.log(names);
console.log(names.length);
names[1] = "Captain-America";
console.log(names);
console.log(names.length);
names[3] = "Thor";
names[4] = "Loki";
console.log(names);
console.log(names.length);

// Arrays Methods
// 1. push : add to end
// 2. pop : delete from end & returns it
// 3. unshift : add to start
// 4. shift : delete from start and returns it

let cars = ["Toyota Supra MK4", "Ford Mustang", "Ferrari", "Mazda"];
console.log(cars);
cars.push("Koenigsegg");
cars.push("Mitsubishi");
cars.push("BMW");
cars.push("Audi");
cars.push("Mercedes");
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift("Mercedes");
console.log(cars);
cars.shift();
console.log(cars); 

// indexOf and includes methods
console.log(cars.indexOf("Ford Mustang"));
console.log(cars.indexOf("audi"));
console.log(cars.includes("Koenigsegg"));
console.log(cars.includes("Maruti"));

// concatination and reverse
let primary = ["Red", "Green", "Blue"];
let secondary = ["Orange", "Violet", "Yellow"];
let allColors = primary.concat(secondary);
console.log(allColors);

let carsReverse = cars.reverse();
console.log(carsReverse);

// slice method
let colors = ["red", "blue", "green", "pink", "black", "white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(3,5));
console.log(colors.slice(-3));

// splice method
console.log(colors.splice(4));
// console.log(cars.splice(1,2));
// console.log(cars);

// sort method
console.log(cars.sort());

// array referrence
let array1 = [1];
let array2 = [2];
console.log(array1 == array2);
console.log(array1 ===  array2);

let arry = ['a', 'b', 'c'];
let arryCopy = arry;
console.log(arry == arryCopy);
arry.push('d');
arryCopy.push('e');
console.log(arry);
console.log(arryCopy);
arry.pop();
console.log(arry);
console.log(arryCopy);

let arr2 = ['a', 'v', 'z'];
let arrCopy = ['a', 'v', 'z'];
arr2.push('x');
console.log(arr2 == arrCopy);

// constant array
const arr = [1, 4, 9, 16];
console.log(arr);
arr.push(25);
console.log(arr);
arr.pop();
console.log(arr);

// nested array
let numbers = [[1,2,3], [1,4,9], [1,8,27]];
console.log(numbers);