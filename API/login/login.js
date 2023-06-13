const con = require("../../database/connection");
const bcrypt = require("bcrypt");
function login(req, resp) {
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
}
module.exports = login;
