const con = require("../../database/connection");
function EditDepartment(req, resp) {
  const id = req.params.id;
  // console.log("edit me ",req.body)
  const query = `UPDATE department SET department = '${req.body.assetCategory}' WHERE id=${id};`;
  con.query(query, (err, data) => {
    if (err) {
      console.log("Error in query..", err);
      resp.status(400).json({
        error: {},
        message: "Please provide user and user_id",
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
module.exports = EditDepartment;









