const con = require("../../database/connection");
function EditEmployee(req, resp) {
  const id = req.params.id;
  console.log("edit me ", req.body);
  const query = `UPDATE employees SET name = "${req.body.name}",  gender= "${req.body.gender}",department="${req.body.department}" WHERE emp_id=${id};`;
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
module.exports = EditEmployee;
