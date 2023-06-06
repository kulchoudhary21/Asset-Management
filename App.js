var mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const fs = require("fs");

//load env variables
require("dotenv").config();
const seedQuery = fs.readFileSync("./seeding.sql", {
  encoding: "utf-8",
});

const app = express();
var corsOptions = {
  origin: "https:localhost:1234",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin@123",
  database: "assets",
});
con.connect((err) => {
  if (err) {
    console.log("errr,,,", err);
  }
  console.log("Connected..");
});
//seeding..

let pw = "123";
let hash = bcrypt.hashSync(pw, 3);
console.log(hash);
console.log("Ruunning seed...");
con.query(seedQuery, [hash], (err) => {
  console.log("--------");
  if (err) {
    console.log("ee..", err);
  } else {
    console.log("Sql seed completed for passwd for initial account", pw);
  }
});

// login api
// app.get("/login", (req, resp) => {
//   const query = "select * from admin";
//   con.query(query, (err, data) => {
//     if (err) throw err;
//     resp.status(200).json({
//       status: "success",
//       length: data?.length,
//       data: data,
//     });
//   });
// });

//post api
app.post("/login", (req, resp, next) => {
  console.log("inside..");
  const query = "select * from admin";
  con.query(query, (err, data) => {
    if (err) throw err;
    let obj = {};
    console.log(data[1].email);
    for (let item in data[1]) {
      if (item != "email" && item != "passwd") {
         console.log("item:",item,"  data[1]:",data[1][item])
        obj[item] = data[1][item];
        console.log(obj)
      }
    }

    if (pw == req.body.passwd && data[1].email==req.body.email) {
      resp.status(200).json({
        status: "success",
        // length: data?.length,
        data: obj,
      });
    } else {
      resp.status(200).json({
        status: "error",
        data: {},
      });
    }
    console.log(req.body);
  });
});

app.listen(3001);
