const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

let port = 8080;

// our middleware
// app.use((req,res, next)=>{
//     console.log("Hi, I 1st am middleware");
//     return next();
// });

// app.use((req,res, next)=>{
//     console.log("Hi, I 2nd am middleware");
//     return next();
// });


app.use("/api",(req,res,next) =>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!");
});

app.use("/random", (req,res, next) =>{
    console.log("I am only for random");
    next();
});

// 404
// app.use((req,res) =>{
//     res.send(`Cannot find ${req.url}`);
// })

// logger
// app.use((req,res,next) =>{
//     req.time = new Date(Date.now()).toString;
//     console.log(req.method, req.hostname, req.time);
//     next();
// });

  


app.get("/", (req,res)=>{
    res.send("Hi, I am root");
});

app.get("/error",(req,res)=>{
    coding = money;
});

// Error handling
app.use((err,req,res,next) =>{
    console.log("-------ERROR--------");
    // next(err);
    // res.send(err);
    let{status=500,message="You accessed a wrong page!"} = err;
    res.status(status).send(message);
});
  
app.get("/admin",(req,res) =>{
    throw new ExpressError(403, "Access to admin is Forbidden");
})

app.get("/api",(req,res) =>{
    res.send("Data is here");
});

app.get("/random", (req,res)=>{
    res.send("Hi, I am ramdom page");
});

app.listen(port, (req,res) =>{
    console.log(`Server is running on ${port}`);
});
