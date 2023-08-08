/* Async function */

// async function use
async function greet(){
    // throw "Error 404 Page was not found!"
    return "BGMI";
}

greet()
.then((result) =>{
    console.log("Promise was resolved");
    console.log(result);
})
.catch((err) =>{
    console.log("Error is : ", err);
})

// async fun() using arrow function
let demo = async () =>{
    return "6 Underground";
}

// await keyword use
//to wait for the result of a promise or an asynchonous function call and then continue
//with code execution after that

function getNum (){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*50)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo2(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}
demo2();

// changeColor code with async function

let heading1 = document.querySelector('h1');
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random()*5)+1;
        if(num > 2){ 
            reject("Promise reject");
        }
      setTimeout(() => {
        // let num = Math.floor(Math.random()*5)+1;
        // if(num > 3){ 
        //     reject("Promise reject");
        // }
        heading1.style.color = color;
        console.log(`Color changed to ${color}`);
        resolve("Color changed");
      }, delay);
    });
}

async function demo3(){
    try{
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
        await changeColor("purple", 1000);
    }
    catch(err){
        console.log("Error caught")
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("New value of a ", a+6);
}

demo3();

// fetching API
let url = "https://catfact.ninja/fact";

// fetch(url).then((res)=>{
//     // console.log(res);
//     return res.json();
// })
// .then((data1) =>{
//     console.log("data1 : ", data1);
//     return fetch(url);
// }) 
// .then((res)=>{
//     return res.json();
// })
// .then((data2) =>{
//     console.log("data2 : ",data2);
// })
// .catch((err)=>{
//     console.log("ERROR - ", err);
// });


// fetching api with the help of aysnc and await
async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log("Data is : ",data);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("Data is : ",data2);
    } catch(e){
        console.log("Error - ", e);
    }
}

getFacts();

let jsonRes = '{"fact": "Cats urine glows under a black light.","length": 38}';