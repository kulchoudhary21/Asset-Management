const express = require("express");
const app = express();
const cors = require("cors");
const login = require("./API/login/login");
const postCategory = require("./API/category/postCategory");
const getCategory = require("./API/category/getCategory");
const postEmployee = require("./API/employee/createEmployee");
const deleteCategory = require("./API/category/deleteCategory");
const editCategory = require("./API/category/editCategory");
const DeleteDepartment = require("./API/department/deleteDepartment");
const CreateDepartment = require("./API/department/postDepartment");
const EditDepartment = require("./API/department/editDepartment");
const GetDepartment = require("./API/department/getDepartment");
const DeleteEmployee = require("./API/employee/deleteEmployee");
const CreateEmployee = require("./API/employee/postEmployee");
const EditEmployee = require("./API/employee/editEmployee");
const GetEmployee = require("./API/employee/getEmployee");
const DeleteAssign = require("./API/assign/deleteAssign");
const CreateAssign = require("./API/assign/postAssign");
const EditAssign = require("./API/assign/editAssign");
const GetAssign = require("./API/assign/getAssign");

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
//***Login****
app.post("/login", (req, resp, next) => {
  return login(req, resp);
});
//***Category****
app.get("/assetGetCategory", (req, resp) => {
  return getCategory(req, resp);
});

app.post("/assetCreateCategory", (req, resp) => {
  return postCategory(req, resp);
});

app.put("/deleteCategory/:id", (req, resp) => {
  return deleteCategory(req, resp);
});

app.put("/editCategory/:id", (req, resp) => {
  return editCategory(req, resp);
});

//***Department***
app.get("/getDepartment", (req, resp) => {
  return GetDepartment(req, resp);
});

app.post("/createDepartment", (req, resp) => {
  return CreateDepartment(req, resp);
});

app.put("/deleteDepartment/:id", (req, resp) => {
  return DeleteDepartment(req, resp);
});

app.put("/editDepartment/:id", (req, resp) => {
  return EditDepartment(req, resp);
});

//***Employee****
app.get("/getEmployee", (req, resp) => {
  return GetEmployee(req, resp);
});

app.post("/createEmployee", (req, resp) => {
  return CreateEmployee(req, resp);
});

app.put("/deleteEmployee/:id", (req, resp) => {
  return DeleteEmployee(req, resp);
});

app.put("/editEmployee/:id", (req, resp) => {
  return EditEmployee(req, resp);
});

//***Assign****
app.get("/getAssign", (req, resp) => {
  return GetAssign(req, resp);
});

app.post("/createAssign", (req, resp) => {
  return CreateAssign(req, resp);
});

app.put("/deleteAssign/:id", (req, resp) => {
  return DeleteAssign(req, resp);
});

app.put("/editAssign/:id", (req, resp) => {
  return EditAssign(req, resp);
});
//---End---
app.listen(3001);
