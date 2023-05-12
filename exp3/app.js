const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    res.render("home");
})
app.get("/about", (req, res)=>{
    var name = "Rohit";

    var obj = { a : name, b : "indore" };
    var data = { x : "red", y : "blue"};
    var num = [100, 200, 300];


    var pagedata = { obj : obj, data : data, num : num };

    res.render("about", pagedata);
})

app.listen(3000, ()=>{
    console.log("*********server running with port ----- 3000");
});

