/* For loop */
for(let i = 1; i <= 5; i++){
    console.log(i);
} 

for(let i = 10; i >= 1; i--){
    console.log(i);
}

// print odd no.s (1 to 15)
for(let i = 1; i <= 15; i=i+2){
    console.log(i);
}

console.log("Backwards");
for(let i = 15; i >= 1; i=i-2){
    console.log(i);
}

// print even no.s (2 to 10)
for(let i = 2; i <= 10; i=i+2){
    console.log(i);
}

console.log("Backwards")
for(let i = 10; i >= 2; i= i-2){
    console.log(i);
}

//infinite loop
// for(let i = 1; ; i++){
//     console.log(i);
// }

//table of 5
for(let i = 1; i <= 10; i++){
    console.log("5 x ", i  ," = ",i*5);
}

//table of any number
let num = prompt("Enter any number");
num = parseInt(num);

for(let i = num; i <= num*10; i=i+num){
    console.log(i);
}

//nested loops
for(let i = 1; i <= 3; i++){
    console.log(`Outer loop ${i}`)
    for(let j = 1; j <= 3; j++){
        console.log(j);
    }
}

//while loop
let i = 1;
while(i <= 5){
    console.log(i * i);
    i++;
}

//fav movie activity
const favMovie = "KGF";
let guess = prompt("Guess my fav movie")

while(guess != favMovie){
    if(guess == "quit"){
        console.log("You quit!!")
        break;
    }
    guess = prompt("Wrong answer!! Try again");
}

if(guess == favMovie){
    console.log("Congrats!!");
}

//break keyword
//let i = 1;
while(i <=9){
    if(i == 6){
        break;
    }
    console.log(i);
    i++;
}
console.log("We use break keyword at 6");

//Loops in array
let fruits = ["Apple", "Mango", "Pineapple", "Orange", "Grapes"];
for(let i = 0; i < fruits.length; i++){
    console.log(i, fruits[i]);
}

//nested loops in array
let heros = [["Iron-Man", "Captain America", "Spider-Man"], ["Super-Man", "BatMan", "AquaMan"]];
for(let i = 0; i< heros.length; i++){
    console.log(`Heros of team #${i}: `)
    for(let j = 0; j < heros[i].length; j++){
        console.log(heros[i][j]);
    }
}

// for of loops
let cars = ["Toyota Supra MK4", "Ford Mustang", "Ferrari", "Mazda", "Koenigsegg"];
for(car of cars){
    console.log(car);
}

let str = "Web Developer";
for(char of str){
    console.log(char);
}

// nested for of loop
let character = [["Iron-Man", "Captain America", "Spider-Man"], ["Super-Man", "BatMan", "AquaMan"]];
for(list of heros){
    console.log(list);
    for(hero of list){
        console.log(hero);
    }
}
