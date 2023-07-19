// ques 1
let diceNo = Math.floor(Math.random() * 6) +1;
console.log("Dice number is " + diceNo);

// ques 2
const cars = [
    {
        name : "Ford",
        model : "Mustang",
        color : "Black"
    },

    {
        name: 'Toyota',
        model : "Supra MK4",
        color : "Yellow"
    },

    {
        name : "BMW",
        model : "GTR",
        color : "Blue-white"
    },

    {
        name : "Porsche",
        model : "Corvette",
        color : "White"
    },

    {
        name : "Koenigsegg",
        model : "Gemera",
        color : "Blue-green"
    }
]
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);

// ques 3
const person = {
    name : "Johnny",
    age : "40",
    city : "Los Angelas",
};
console.log(person);
person.city = "New York";
person.country = "United States"
console.log(person);