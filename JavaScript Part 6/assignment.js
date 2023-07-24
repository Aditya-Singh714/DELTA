// ques 1
const arrayAverage = (arr) => {
    let sum = 0;
    for(let index of arr){
        sum += index;
    }

    return sum/arr.length;
};
let arr = [10, 51, 45, 53, 23];
console.log(arrayAverage(arr));

// ques 2
const isEven = num =>{
    if(num%2 ==0){
        return true;
    } else {
        return false;
    }
};
let num = 22;
console.log(isEven(num));

// ques 3
// what is output of code
const object = {
    message : "Hello World!",

    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,2000);

// ques 4
let length = 4;
function callback(){
    console.log(this.length);
}
const object2 = {
    length:5,
    method(callback){
        callback();
    },
};

object2.method(callback,1,2);