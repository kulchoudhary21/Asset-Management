const con = require("../../database/connection");
function CreateEmployee(req, resp) {
  console.log("edee-------", req.body);
  let query =
    "insert into employees(name,department,gender,records,isDelete) values(?,?,?,0,?);";
  con.query(
    query,
    [req.body.name, req.body.department, req.body.gender, req.body.isDelete],
    (err, data) => {
      if (err) {
        console.log("Error in query..", err);
      } else {
        if (data) {
          resp.status(200).json({
            status: "success",
          });
        } else {
          resp.status(401).json({
            status: "Unauthorized",
          });
        }
      }
    }
  );
}
module.exports = CreateEmployee;
