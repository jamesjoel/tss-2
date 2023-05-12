const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.get("/", (req, res)=>{
    res.render("pages/home");
})
app.get("/about", (req, res)=>{
    res.render("pages/about");
})
app.get("/student", (req, res)=>{
    res.render("pages/student");
})

app.post("/save", (req, res)=>{
    console.log(req.body.name);
    console.log(req.body.contact);
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server running");
})


