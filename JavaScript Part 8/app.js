let links = document.querySelectorAll(".box a");

// for(let i = 0; i < links.length; i++){
//     links[i].style.color = "red";
// }

for(link of links){
    link.style.color = "red"; // set in inline style
}

console.log("Hello");
