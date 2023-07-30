let input = document.getElementById("name");
let heading = document.getElementById("heading");

input.addEventListener("input", function () {
  let value = this.value.replace(/[^a-zA-Z ]/g, "");
  heading.innerHTML = value;
});


let btn = document.createElement('button');

btn.innerText = "Click me";

document.querySelector("body").append(btn);

btn.addEventListener("click", function(){
  btn.style.backgroundColor = "green";
});