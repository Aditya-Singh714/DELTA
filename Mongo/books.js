const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/book');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const bookSchema = new mongoose.Schema({
    // true syntax to write schema
    title:{
        type : String,
        required : true, // equal to not null
        maxLength : 40
    },
    author:{
        type : String,
    },
    price:{
        type : Number,
    },
    discount:{
        type : Number,
        default : 50
    },
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title : "Mathematics 12th",
//     author :"R D Sharma",
//     price : 900
// });

// book1.save().then((res) =>{
//     console.log(res);
// }) .catch((err) =>{
//     console.log(err);
// });

// let book2 = new Book({
//     title : "The Jungle Book",
//     author : "Rudyard Kipling",
//     price : "499" 
// });

// book2.save().then((res) =>{
//     console.log(res);
// }) .catch((err) =>{
//     console.log(err);
// });

let book3 = new Book({
    title : "Sampurna Chanakya neeti",
    author : "Chanakya",
    price : 399
});

book3.save().then((res) =>{
    console.log(res);
}) .catch((err) =>{
    console.log(err);
});
