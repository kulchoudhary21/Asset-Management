const con = require("../../database/connection");
function getAssign(req, resp) {
  const query = 'select * from assign where isDelete="false"';
  con.query(query, (err, data) => {
    if (data) {
      if (err) {
        console.log("Error :", err);
      } else {
        if (data) {
          resp.status(200).json({
            status: "success",
            data: data,
          });
        } else {
          resp.status(401).json({
            status: "error",
            data: {},
          });
        }
      }
    }
  });
}
module.exports = getAssign;












