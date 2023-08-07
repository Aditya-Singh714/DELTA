/* Call Stack */

// function hello(){
//     console.log("inside hello fnc");
//     console.log("Hello");
// }

// function demo(){
//     console.log("calling hello fnc");
//     hello();
// }

// console.log("calling demo fnc");
// demo();
// console.log("done. bye!");

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

/* Callback hell */
let heading1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChnage){
//     setTimeout(() => {
//         heading1.style.color = color;
//         if(nextColorChnage) nextColorChnage();
//     }, delay);
// }

// changeColor("red", 1000, ()=>{
//     changeColor("chocolate", 1000, ()=>{
//         changeColor("#45ea59",1000, () =>{
//             changeColor("blue",1000, ()=>{
//                 changeColor("brown",1000);
//             });
//         });
//     });
// });

// callback nesting -> callback hell

// promise version of changeColor
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      heading1.style.color = color;
      resolve("Color changed");
    }, delay);
  });
}

changeColor("red",1000)
.then(()=>{
  console.log("red color was completed");
  return changeColor("orange",2000);
})
.then(()=>{
  console.log("orange color was completed");
  return changeColor("#45ef54",2000);
})
.then(()=>{
  console.log("#45ef54 color was completed");
  return changeColor("blue",2000);
})
.then(()=>{
  console.log("blue  color was completed");
})
.catch(()=>{
  console.log("Color was not changed");
});

/* Promises */
function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let netSpeed = Math.floor(Math.random() * 10) + 1;

    if (netSpeed > 5) {
      resolve("success : data was saved");
    } else {
      reject("failure : data was not saved");
    }
  });
}

// let request = saveToDB("BGMI"); // req = promise object
// request .then(() =>{
//     console.log("Promise resolved");
// })
// .catch(() =>{
//     console.log("Promise rejected");
// })

// compact version

// saveToDB("BGMI")
//   .then(() => {
//     console.log("Promise resolved");
//   })
//   .catch(() => {
//     console.log("Promise rejected");
//   });

/* promise chaining = improved version*/
// saveToDB("BGMI")
//   .then(() => {
//     console.log("Data1 saved. Promise resolved");
//     saveToDB("DELTA").then(()=>{
//       console.log('Data2 saved. Promise resolved');
//     });
//   })
//   .catch(() => {
//     console.log("Promise rejected");
//   });

// more improved version results and errors
saveToDB("BGMI")
  .then((result) => {
    console.log("Data1 saved");
    console.log("result of promise ", result);
    return saveToDB("DELTA");
  })
  .then((result) => {
    console.log("Data2 saved");
    console.log("result of promise", result);
  })
  .catch((error) => {
    console.log("Promise rejected");
    console.log("error of promise ", error);
  });
