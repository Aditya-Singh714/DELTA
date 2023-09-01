const express = require("express");
const app = express();
// const path = require("path");

const {v4 : uuidv4} = require("uuid");
const methodOverride = require("method-override");

let port = 8080;

app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

app.use(express.static("public"));
// app.use("views", path.join(__dirname, "views"))

app.set("view engine", "ejs");

let posts = [
    {
        id : uuidv4(),
        username : "adityasingh",
        content : "Hard Work is important to acheive success"
    },
    {
        id : uuidv4(),
        username : "siddharthsingh",
        content : "I love coding and I am learning new things everyday."
    },
    {
        id : uuidv4(),
        username : "code_help",
        content : "Hello ji, kaise ho aap sab log"
    }
];

app.get("/posts", (req,res) =>{
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req,res) =>{
    res.render("new.ejs");
});

app.get("/posts/:id", (req, res) =>{
    let{id} = req.params;
    let post = posts.find((pID) => id === pID.id);
    res.render("show.ejs", {post});
});

app.post("/posts", (req,res) =>{
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});

app.patch("/posts/:id", (req, res) =>{
    let{id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((pID) => id === pID.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) =>{
    let{id} = req.params;
    posts = posts.filter((pID) => id !== pID.id);
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) =>{
    let{id} = req.params;
    let post = posts.find((pID) => id === pID.id);
    res.render("edit.ejs", {post});
});


app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
});
