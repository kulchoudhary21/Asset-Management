const con = require("../../database/connection");
function editAssign(req, resp) {
  const id = req.params.id;
  console.log("cbjodcbjocbqjc----", req.body);
  const query = `UPDATE assign SET emp_id = '${req.body.emp_id}',emp_name='${req.body.emp_name}',department='${req.body.department}',category='${req.body.category}',model='${req.body.model}' ,issueDate='${req.body.issueDate}' WHERE a_id=${id};`;
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
module.exports = editAssign;
