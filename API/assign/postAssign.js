const con = require("../../database/connection");
function postAssign(req, resp) {
  console.log("hiii")
  // console.log(req.body);
  // insert into assign(emp_id,emp_name,department,category,model,issueDate,isDelete) values(1,"kuldeep",'js',"laptop",'lp302','2','false');

  const query = `insert into assign(emp_id,emp_name,department,category,model,issueDate,isDelete) values('${req.body.emp_id}','${req.body.emp_name}','${req.body.department}','${req.body.category}','${req.body.model}','${req.body.issueDate}','${req.body.isDelete}');`;
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
module.exports = postAssign;
