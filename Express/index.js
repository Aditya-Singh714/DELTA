const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;  // 8080 ya 3000

app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
});

// app.use((req, res) =>{
//     // console.log(req);
//     console.log("Request recieved");

//     // res.send("This is a basic response");

//     // res.send({
//     //     name : "apple",
//     //     color : "grey",
//     //     os : "IOs"
//     // });

//     let code = "<h1>Laptop</h1>  <ul> <li>Apple</li>ASUS</ul>";

//     res.send(code);
// });

app.get("/", (req, res) =>{
    res.send("You contacted root path");
});

app.get("/:username/:id", (req, res) =>{
    let{username, id} = req.params;
    let htmlCode = `<h1>Welcome to the world of @${username}</h1>`;
    res.send(htmlCode);
});

app.get("/search", (req,res)=>{
    let{q} = req.query;
    if(!q){
        res.send("Nothing searched");
    }

    let htmlCode = `<h1>Searches qurey q ${q}</h1>`;
    res.send(htmlCode);
    res.send(`Search reaults of query: ${q}`);
});

// app.get("/youtube", (req, res) =>{
//     res.send("You contacted YouTube path");
// });

// app.get("/netflix", (req, res) =>{
//     res.send("You contacted Netflix path");
// });

// app.get("/instagram", (req, res) =>{
//     res.send("You contacted Instagram path");
// });

// app.get("/search", (req, res) =>{
//     res.send("You contacted Searching path");
// });

// app.get("*", (req, res) =>{
//     res.send("This path/page not exsit"); // agr jo request upr se match nhi hui to ye message show hoga
// });

// app.post("/", (req, res) =>{
//     res.send("You sent a post request to root path");
// });
