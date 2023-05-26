const app = require("express").Router();
const Teacher = require("../models/Teacher");
const City = require("../models/City");
const mongoose = require("mongoose");
const objid = mongoose.Types.ObjectId;

// :3000/tacher
app.get("/", async (req, res)=>{
    var result = { name : "", email : "", salary : "", age : "", city : "", address : "" };
    var cityresult = await City.find();
    var obj = { result : result, city : cityresult };
    res.render("pages/teacher", obj);
})


app.get("/list", async (req, res)=>{
    var result = await Teacher.find(); // return an array
    var obj = { result : result };
    res.render("pages/teacher-list", obj);
})

app.post("/", async (req, res)=>{
    req.body.address = req.body.add;
    await Teacher.create(req.body);
    res.redirect("/teacher/list");
})

app.post("/:a", async (req, res)=>{
    var x = req.params.a;
    req.body.address = req.body.add;
    await Teacher.updateMany({ _id : x}, req.body);
    res.redirect("/teacher/detail/"+x);
})

app.get("/delete/:a", async (req, res)=>{
    var x = req.params.a;
    await Teacher.deleteMany({ _id : x});
    res.redirect("/teacher/list");
})

app.get("/detail/:a", async (req, res)=>{
    var x = req.params.a;
    if(objid.isValid(x)){
        var result = await Teacher.find({_id : x});
        if(result.length > 0){
            var obj = { result : result[0] };
            res.render("pages/teacher-detail", obj)
        }
        else{

            res.redirect("/teacher/list");
        }
    }else{

        res.redirect("/teacher/list");
    }
})

app.get("/edit/:a", async (req, res)=>{
    var x = req.params.a;
    var result = await Teacher.find({_id : x});
    var cityresult = await City.find();
    var obj = { result : result[0], city : cityresult };
    res.render("pages/teacher", obj);
})

module.exports = app;


/*
    app.get(route)          --- slice
    app.post(route)         --- slice


    <a href="full route"
    <form action ="full route"
    res.redirect("fullroute")




*/