let gameSeq = [];
let userSeq = [];

let btnColors = ["green", "red", "orange", "blue"];

let started = false;
let level = 0;

let heading2 = document.querySelector('h2');

let button = document.querySelector('button');
button.addEventListener("click", function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },210);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    heading2.innerText = `Level ${level}`;

    // randon btn flash
    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btnColors[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
   
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn); 
}

function checkColor(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,750);
        }
    } else{
        heading2.innerHTML = `☠️ GAME OVER ☠️!! Your score was ${level}. <br /> Click on start button to start the game.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);

        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkColor(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}