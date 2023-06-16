const con = require("../../database/connection");
function DeleteAssign(req, resp) {
  const id = req.params.id;
  const query = `UPDATE assign SET isDelete = 'true' WHERE a_id=${id};`;
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
module.exports = DeleteAssign;
