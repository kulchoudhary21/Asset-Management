const con = require("../../database/connection");
function CreateDepartment(req, resp) {
  // console.log(req.body);
  const query = `insert into department(isDelete,department) values('${req.body.isDelete}','${req.body.assetCategory}');`;
  con.query(query, (err, data) => {
    if (err) {
      console.log("Error in query..", err);
      resp.status(401).json({
        status: "Unauthorized",
      });
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
  });
}
module.exports = CreateDepartment;
