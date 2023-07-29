let para1 = document.createElement('p');
para1.innerText = "Hey! I'm red";

document.querySelector("body").append(para1);

para1.classList.add("red");

let heading3 = document.createElement('h3');
heading3.innerText = "I'm a blue h3!";

document.querySelector("body").append(heading3);

heading3.classList.add("blue");

let div = document.createElement('div');
let heading1 = document.createElement('h1');
let para2 = document.createElement('p');

heading1.innerText = "I'm in a div";
para2.innerText = "MEE TOO!";

div.append(heading1);
div.append(para2);

div.classList.add("div");
document.querySelector("body").append(div);