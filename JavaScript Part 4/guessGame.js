/* Creating a guessing game */

const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) +1;
let guess = prompt("Guess the number");

while(true){
    if(guess == "Quit"){
        console.log("User quit");
        break;
    }

    if(guess == random){
        console.log(`Congratulation! you guess the right number that is ${random}`);
        break;
    } else if(guess < random){
        guess = prompt("Hint : Your guess is small. Please try again!");
    } 
    else {
        guess = prompt("Hint : Your guess was large. Please try agian");
    }
}