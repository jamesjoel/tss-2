var express = require("express");
var app = express();

// Routing Define

/*
    facebook.com            localhost:3000
    facebook.com/about      localhost:3000/about
    facebook.com/contact    localhost:3000/contact



*/

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html");
});

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
})
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
})




// listen() function used for create virtual server
app.listen(3000, ()=>{
    console.log("server running");
});

// virtual domain ---- localhost:3000
// virtual domain ---- localhost:4000


/*
    function demo(a, b, c)
    {

    }

    demo(5, 7, xyz)

    var xyz = ()=>{

    }

*/