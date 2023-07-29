//  ques 1
let input = document.createElement('input');
let button = document.createElement('button');

button.innerText = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

// ques 2
button.setAttribute('id', 'btn');
input.setAttribute('placeholder', 'Username');

// ques 3
let btn = document.querySelector('#btn');
btn.classList.add('btnStyle');

// ques 4
let head1 = document.createElement('h1');
head1.innerHTML = "<u> DOM Practice </u>";
document.querySelector("body").append(head1);
head1.classList.add('heading1');

// ques 5
let para = document.createElement('p');
para.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para);