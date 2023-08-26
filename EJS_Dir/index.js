const express = require("express");
const app = express();

let port = 8080;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/",(req,res) =>{
    res.render("home.ejs");
});

app.get("/ig/:username", (req,res) =>{
    let { username } = req.params;

    const instaData = require("./data.json");
    const data = instaData[username];

    if(data){
        res.render("instagram.ejs", { data });
    } else{
        res.render("error.ejs");
    }
});

app.get("/hello",(req,res) =>{
    res.send("To kaise h aap log");
});  

app.get("/rolldice", (req,res) =>{
    let randomNumber= Math.floor((Math.random()*6)+1);
    res.render("rolldice.ejs", {num : randomNumber});
});

app.listen(port, ()=>{
    console.log(`App is listening at port ${port}`);
});
