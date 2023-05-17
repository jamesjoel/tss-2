const express = require("express");
const app = express(); // call
const route = require("./config/routes");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// the .use() is a middleware which can call auto, when any other route call
app.use(route); // all




const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server running");
})


