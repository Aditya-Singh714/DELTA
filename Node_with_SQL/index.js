const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

let port = 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "enter your database password 😊",
});

let getRandomUser = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let q = "SHOW TABLES";
// let insert = "INSERT INTO user(id, username, email, password) VALUES ?";
// let users = [["533", "Lucifer Morningstar", "kingofhell@hotmail.com", "your_desire"],
//               ["331", "Miles Morals", "spiderman@gmail.com", "responsibility"]];

// let userData = [];
// for(let i =1; i <= 100; i++){
//   userData.push(getRandomUser());  // 100 fake data
// }

// connection.end();

// Homepage route
app.get("/", (req, res) => {
  let query = `SELECT count(*) FROM user`;
  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in Database");
  }
});

// show user route
app.get("/users", (req, res) => {
  let query = `SELECT * FROM user`;
  try {
    connection.query(query, (err, users) => {
      if (err) throw err;
      res.render("showUsers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in Database");
  }
});

// edit route
app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let query = `SELECT * FROM user WHERE id= '${id}'`;
  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in Database");
  }
});

// update(DB) route
app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let query = `SELECT * FROM user WHERE id= '${id}'`;
  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("Wrong password");
      } else {
        let query = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(query, (err, result) => {
          if (err) throw err;
          res.redirect("/users");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in Database");
  }
});


// adding new user
app.get("/users/new_user", (req, res) => {
  res.render("newUser.ejs");
});

app.post("/users/new_user", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();

  let query = `INSERT INTO user (id, username, email,password) VALUES('${id}', '${username}', '${email}', '${password}')`;

  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      console.log("user added");
      res.redirect("/users");
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in Database");
  }
});


// delete user
app.get("/users/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/users/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
