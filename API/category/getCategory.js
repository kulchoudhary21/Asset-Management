const con = require("../../database/connection");
function getCategory(req, resp) {
  const query = "select * from assetCategory";
  con.query(query, (err, data) => {
    if (data) {
      if (err) {
        console.log("Error :", err);
      } else {
        // console.log("------", data);
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
module.exports = getCategory;
