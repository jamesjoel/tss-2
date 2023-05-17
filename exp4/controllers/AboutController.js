const app = require("express").Router();

app.get("/", (req, res)=>{
    
    res.render("pages/about");
})

app.get("/info/:a/:b/:c", (req, res)=>{
    console.log(req.params.a)
    console.log(req.params.b)
    console.log(req.params.c)
})


module.exports = app;

/*

var result = await Teacher.find()
var result = await Teacher.find({ age : 25 })

*/