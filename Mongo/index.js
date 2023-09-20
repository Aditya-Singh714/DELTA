const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//     name : "Adam",
//     email : "adam@yahoo.in",
//     age : 45
// });

// user1.save();

// const user2 = new User({
//     name : "Eve",
//     email : "eve@yhotmail.com",
//     age : 44
// });

// user2.save().then((res) =>{
//     console.log(res);
// }) .catch(err => console.log(err));

// User.insertMany([
//     {name : "John" ,email : "mrwick@yahoo.us", age : 38},
//     {name : "Tony", email: "inronman@gmail.com", age: 40},
//     {name : "Goku", email : "songoku@hotmail.com", age : 25}
// ]).then((data) =>{
//     console.log(data);
// })

// User.find({}).then((data) =>{
//     console.log(data);
// });

// User.find({age : {$gte:40}}).then((res)=>{
//     console.log(res);
// }) .catch((err) =>{
//     console.log(err);
// });

// User.updateOne({name:"Adam"}, {name: "Steve",email:"captain@hotmail.us",age:55}).then((res) =>{
//     console.log(res);
// }) .catch((err) =>{
//     console.log(err);
// });

// User.deleteOne({name:"Eve"}).then((res) =>{
//     console.log(res);
// });

// User.findByIdAndDelete("6501eb85deacf223a86cbb92").then((res) =>{
//     console.log(res);
// });

// User.deleteMany({age : {$gte : 40}}).then(res => console.log(res));

User.findOneAndDelete({age: 38}).then(res => console.log(res));
