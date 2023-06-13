const mysql = require("mysql");

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
module.exports=con;
