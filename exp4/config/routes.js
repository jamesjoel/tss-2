const express = require("express");
const app = express.Router();

app.use("/", require("../controllers/HomeController"));
app.use("/about", require("../controllers/AboutController"));
app.use("/teacher", require("../controllers/TeacherController"));
app.use("/student", require("../controllers/StudentController"));
app.use("/service", require("../controllers/ServiceController"));
app.use("/city", require("../controllers/CityController"));





module.exports = app;


/*

app.get("/student", (req, res)=>{
    res.render("pages/student");
})
app.post("/save", async (req, res)=>{
   
    // req.body
    await MyModel.create(req.body);
    res.redirect("/");
})




app.get("/teacher", (req, res)=>{
    res.render("pages/teacher");
})
app.post("/teacher", async (req, res)=>{
    
    req.body.address = req.body.add;
    await Teacher.create(req.body);
    res.redirect("/teacher");
})
app.get("/teacher-list", async (req, res)=>{
    var result = await Teacher.find(); // return an array
    var obj = { result : result };
    res.render("pages/teacher-list", obj);
})

*/
