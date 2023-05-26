const app = require("express").Router();
const City = require("../models/City");

var recperpage = 200;

app.get("/", async (req, res)=>{
   
    var totalrec = await City.count(); // 1221
    
    var result = await City.find().limit(recperpage).exec();

    var pages = Math.ceil(totalrec/recperpage);

    res.render("pages/city", {result, pages, skip : 0, currentpage : 1});
})


app.get("/:page", async (req, res)=>{
    var currentpage = req.params.page; // 5

    var page = currentpage-1;  // 4

    var skip = recperpage*page;  // 400
    
    var totalrec = await City.count(); // 1221
    
    var result = await City.find().skip(skip).limit(recperpage).exec(); // 401-500

    var pages = Math.ceil(totalrec/recperpage);

    res.render("pages/city", {result, pages, skip, currentpage});
    
})

module.exports = app;
/*
    City.find()   ---- all rec

    City.find().limit(100).exec()

    City.find().skip(10).exec()

    City.find().skip(10).limit(100).exec()





    page        2       101-200
    page        5       401-500
    page        7       601-700
    page        9       801-900

*/