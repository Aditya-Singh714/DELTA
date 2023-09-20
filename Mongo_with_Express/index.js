const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./models/chats.js");
const methodOverride = require("method-override");
const { compile } = require("ejs");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extented: true }));

let port = 8080;

app.get("/", (req, res) => {
  res.send("Route is working");
});

// Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

// New Route -: creating new chats
app.get("/chats/new", (req, res) => {
  res.render("newChat.ejs");
});

// Create route:- create new chats
app.post("/chats", (req, res) => {
  let { from, message, to } = req.body;
  let newChat = new Chat({
    from: from,
    message: message,
    to: to,
    msg_time: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log(`saved ${message}`);
    })
    .catch((err) => {
      console.error(`${err}`);
    });

  res.redirect("/chats");
});

// Edit route:- edit chats
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("editChat.ejs", { chat });
});

// Update route
app.put("/chats/:id",async(req, res) => {
    let { id } = req.params;
    let { message: newMsg } = req.body;

    let updatedChat = await Chat.findByIdAndUpdate(id, {message: newMsg}, {runValidators: true, new: true}
    );
    res.redirect("/chats");
});

// Delele route:- delete chat
app.delete("/chats/:id", async(req,res)=>{
    let { id } = req.params;
    let deletedChat= await Chat.findByIdAndDelete({"_id": id});

    console.log(deletedChat);
    res.redirect("/chats");
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
