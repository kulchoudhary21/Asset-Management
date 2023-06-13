const con=require("../../database/connection")
function postEmployee(req,resp){
    const query="insert into employees(name,gender,department,records) values(?,?,?,0);"
    con.query(query,[req.body.name,req.body.gender,req.body.depart],(err,data)=>{
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
    })
}
module.exports=postEmployee;