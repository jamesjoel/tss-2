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
/*
    Teacher.find((result1)=>{
        Student.find((result2)=>{
            User.find((result3)=>{
                Product.find((result4)=>{
                    res.render()
                })
            })
        })
    })
    
    ES - 6 ---- async await


    async function getall()
    {
        var result1 = await Teacher.find();
        var result2 = await Student.find();
        var result3 = await User.find();
        var result4 = await Product.find();

    }



    app.get("/", async (req, res)=>{

        var result = await Teacher.find();  

    })


*/