const mysql = require("mysql");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
var cors = require("cors");

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
    console.error("error connecting: " + err.stack);
    return;
  } else {
    console.log("Connecetd...");
  }
});

//post api
app.post("/login", (req, resp, next) => {
  const query1 = `select * from admin where email='${req.body.email}'`;
  con.query(query1, (err, data) => {
    if (err) {
      console.log("Error in query..", err);
    }
    let obj = {};
    if (data && data.length != 0) {
      const check = bcrypt.compareSync(req.body.passwd, data[0].passwd);
      if (check) {
        for (let item in data[0]) {
          if (item != "passwd" && item != "isDelete" && item != "contact") {
            obj[item] = data[0][item];
          }
        }
        resp.status(200).json({
          status: "success",
          data: obj,
        });
      } else {
        resp.status(401).json({
          status: "Unauthorized",
          msg: "Invalid password",
          data: obj,
        });
      }
    } else {
      resp.status(401).json({
        status: "Unauthorized",
        msg: "Invalid email",
        data: obj,
      });
    }
  });
});
app.listen(3001);
