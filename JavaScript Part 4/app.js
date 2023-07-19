/* Js Objecct Literals */

const bike = {
    name : "Pulsar RS200",
    maxPower : "9750 rpm",
    brakes : "Disc",
    fuelCapacity : "13L",
    maxTorque : "8000 rpm"
};

console.log(bike);
console.log(bike.name);

let mobile = {
    brand : "Samsung",
    model : "S23 Ultra",
    price : "1,29,999",
    color : ["Green", "Lavender", "Lime", "Sky Blue", "Graphite", "Red"]
};

console.log(mobile);
console.log(mobile["model"]);

const post = {
    username : "@anonymous",
    content : "Welcome to my hacking universe",
    like : 251,
    reposts : 121,
    tags : ["@hacker", "@whitehat"]
};
console.log(post);

let obj = {
    1 : "love",
    2 : "6988",
    true : "Lion",
    null : "BGMI",
    undefined : "laptop"
};

console.log(obj);
console.log(obj.null);
console.log(obj["undefined"]);

// add and update 
const student = {
    name : "Aditya",
    age : 21,
    marks : 86.7,
    city : "Meerut",
};
console.log(student);
console.log(student.city);
student.city = "Pune"; // update 
console.log(student);
student.gender = "Male"; // add 
console.log(student);

// objects of objects
const stuInfo = {
    aditya : {
        course : "B.Tech IT",
        year : 4
    },
    akshat : {
        course : "B.Com LLB",
        year : 4
    },
    shashank : {
        course : "B.Tech CS",
        year : 3
    }
};

console.log(stuInfo);
console.log(stuInfo.aditya);
console.log(stuInfo.akshat);
console.log(stuInfo.shashank);

// array of objects
const mobiles = [
    {
        brand : "Apple",
        model : "IPhone 14",
        price : "$900"
    },

    {
        brand : "Samsung",
        model : "S23s",
        price : "$650"
    },

    {
        brand : "Nothing",
        model : "Nothing 2",
        price : "$500"
    }
]
console.log(mobiles);
console.log(mobiles[0]);
console.log(mobiles[1]);
console.log(mobiles[2]);
mobiles[0].model = "IPhone 14 pro"
console.log(mobiles[0].model);

// Math object
// abs =  returns positive value only
console.log(Math.abs(125));
console.log(Math.abs(-54));
console.log(Math.abs(-12.24));

// power 
console.log(Math.pow(2,5));
console.log(Math.pow(5,4));

// floor : round of nearest smallest int value
console.log(Math.floor(21.0154));
console.log(Math.floor(69.45415));
console.log(Math.floor(-5.5));

// ciel = celing : round of larger nearest int value
console.log(Math.ceil(91.4154));
console.log(Math.ceil(69.415));
console.log(Math.ceil(-5.5));

// random : generate random number excluded one(1)
console.log(Math.random());

// random integers
let step1 = Math.random();
let step2 = step1*10;

let step3 = Math.floor(step2);
console.log(step3);
console.log(step3+1);

// practice ques
let num = Math.floor(Math.random()*100) + 1;
console.log(num);

let num2 = Math.floor(Math.random()*5) + 1;
console.log(num2);
