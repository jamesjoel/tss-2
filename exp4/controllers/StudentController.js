const app = require("express").Router();
const Student = require("../models/Student");

app.get("/", (req, res)=>{
    res.render("pages/student");
})
app.post("/", async (req, res)=>{
    await Student.create(req.body);
    res.redirect("/");
})

module.exports = app;