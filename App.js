const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const pw = require("./configuration/passwd");

console.log(typeof pw);
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
//post api
app.post("/login", (req, resp, next) => {
  const query = "select * from admin";
  con.query(query, (err, data) => {
    if (err) throw err;
    let obj = {};
    for (let item in data[0]) {
      if (item != "email" && item != "passwd") {
        obj[item] = data[0][item];
      }
    }
    if (pw == req.body.passwd && data[0].email == req.body.email) {
      resp.status(200).json({
        status: "success",
        data: obj,
      });
    } else {
      resp.status(200).json({
        status: "error",
        data: {},
      });
    }
  });
});

app.listen(3001);
