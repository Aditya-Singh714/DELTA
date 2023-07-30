// let btns = document.querySelectorAll('button');

// btn.onclick = function(){
//     console.log("Button was clicked");
// };

// btn.onmouseenter = function(){
//     console.log("You entered a button");
// };

// for(btn of btns){
//     // btn.onclick = sayHello;
//     // btn.onmouseenter = function(){
//     //     console.log("You entered a button");
//     // };
//     // console.dir(btn);

//     btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function(){
//         console.log("You double clciked me");
// ;    });
// }

function sayHello(){
    console.log("Hello!!");
}

function sayName(){
    alert("DELTA");
}

// let para = document.querySelector('p');

// para.addEventListener("click", function(){
//     console.log("Para was clicked");
// });

// let box = document.querySelector('div');

// box.addEventListener("mouseenter", function(){
//     console.log("Mouse inside div");
// });

// let btn = document.querySelector('button');
// btn.addEventListener("click", function(){
//     console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });

let btn = document.querySelector('button');
// let p = document.querySelector('p');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "aqua";
}

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

let input = document.querySelector('input');

// input.addEventListener("keydown", function(event){
//     // console.log("Key was pressed");
//     console.log("Key = ", event.key);
//     console.log("Code = ", event.code);

//     if(event.code == "ArrowUp"){
//         console.log("Character moves forward");
//     } else if(event.code == "ArrowDown"){
//         console.log("Character moves backward");
//     } else if(event.code == "ArrowLeft"){
//         console.log("Character moves left");
//     } else if(event.code == "ArrowRight"){
//         console.log("Character moves right");
//     }
// });


// input.addEventListener("keyup", function(){
//     console.log("Key was released");
// });

// let form = document.querySelector('form');
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     // alert(`Form submitted`);

//     // let user = document.querySelector('#username');
//     // let pass = document.querySelector('#password');

//     // let user = this.elements[0];
//     // let pass = this.elements[1];
    
//     // console.log(user.value);
//     // console.log(pass.value);
//     // console.dir(form);
// });

// let user = document.getElementById('username');
// user.addEventListener("change", function(){
//     console.log("Change event");
//     console.log("Final value = ", this.value);
// });

// user.addEventListener("input", function(){
//     console.log("Input event");
//     console.log("Final value = ", this.value);
// });

let inp = document.querySelector('#text');
let para = document.querySelector('p');
inp.addEventListener("input", function(){
    console.log(input.value);
    para.innerText = inp.value;
});