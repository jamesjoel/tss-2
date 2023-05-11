/*
    main.js
    app.js
    server.js
    index.js
*/
const express = require("express");
const app = express();

// set all static files path one time form app.js file

app.use(express.static(__dirname+"/assets"));




app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})
/*
    all html, images, css, client js (jquery, bootstrap)

*/



app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
})
app.get("/contact", (req, res)=>{
    var name = "rohit";
    res.sendFile(__dirname+"/contact.html");
})


app.listen(3000, ()=>{
    console.log("server running with port 3000");
});

// localhost:3000
