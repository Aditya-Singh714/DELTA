const mongoose = require('mongoose');
const Chat = require("./models/chats.js");

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let chat1 = new Chat({
//     from: "Payal",
//     to: "Aditya",
//     message: "Tomorrow 6am ... ready for DSA 180 days challenge",
//     msg_time: new Date()
// });

// chat1.save().then((res)=>{
//     console.log(res);
// });

let allChats = [
    {
        from: "Aditya",
        to: "Shashank",
        message: "Kitne bje khelega?",
        msg_time: new Date()
    },
    {
        from: "Akhil",
        to: "Akshat",
        message: "Aaja meet pe",
        msg_time: new Date()
    },
    {
        from: "Gabbar",
        to: "Kaliya", 
        message: "Kitne aadami the",
        msg_time: new Date()
    },
    {
        from: "Berlin",
        to: "Professor",
        message:"Hey, how are you doing today? ",
        msg_time: new Date()
    },
    {
        from: "Anubhav",
        to: "BGMI squad",
        message: "Chicken h aaj to",
        msg_time: new Date()
    }
];

Chat.insertMany(allChats);