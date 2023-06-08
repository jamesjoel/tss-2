const app = require("express").Router();
const Category = require("../models/Category")

app.post("/", async(req, res)=>{
    let result = await Category.create(req.body);
    
    res.send({success : true, info: result });
})
app.post("/subcategory", async(req, res)=>{
    // console.log(req.body);
    // return;

    let result = await Category.updateOne({name : req.body.category}, {$push : {subcategory : {name : req.body.name}}});
    
    res.send({success : true, info: result });
})


app.get("/", async(req, res)=>{
    let result = await Category.find();
    
    res.send({success : true, info: result });
})

module.exports = app;

/*


        });
    });
});

*/