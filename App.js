const express = require("express");
const app = express();
const cors = require("cors");
const login = require("./API/login/login");
const postCategory = require("./API/category/postCategory");
const getCategory = require("./API/category/getCategory");
const postEmployee = require("./API/employee/createEmployee");
const deleteCategory=require("./API/category/deleteCategory")
const editCategory=require("./API/category/editCategory");
const corsOption = {
  credentials: true,
  origin: "http://localhost:1234",
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, PUT,POST",
};
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//post api login
app.post("/login", (req, resp, next) => {
  return login(req, resp);
});

app.get("/assetGetCategory", (req, resp) => {
  return getCategory(req, resp);
});

app.post("/assetCreateCategory", (req, resp) => {
  return postCategory(req, resp);
});

app.put("/deleteCategory/:id",(req,resp)=>{
  return deleteCategory(req,resp);
})

app.put("/editCategory/:id",(req,resp)=>{
  return editCategory(req,resp);
})

app.post("/createEmployee", (req, resp) => {
  return postEmployee(req, resp);
});


app.listen(3001);



