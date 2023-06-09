const app = require("express").Router();
const Category = require("../models/Category")

app.post("/", async(req, res)=>{
    let result = await Category.create(req.body);
    res.send({success : true, info: result });
})

app.get("/", async(req, res)=>{
    let result = await Category.find();
    res.send({success : true, info: result });
})
app.delete("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Category.deleteMany({ _id : id })
    res.send({success : true, info: result });
})
app.put("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Category.updateMany({ _id : id }, req.body)
    res.send({success : true, info: result });
})


module.exports = app;

/*


        });
    });
});

*/