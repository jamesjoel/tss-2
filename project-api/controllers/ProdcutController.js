const app = require("express").Router();
const Product = require("../models/Products")

app.post("/", async(req, res)=>{
    let result = await Product.create(req.body);
    res.send({success : true, info: result });
})

app.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send({success : true, info: result });
})
app.delete("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Product.deleteMany({ _id : id })
    res.send({success : true, info: result });
})
app.put("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Product.updateMany({ _id : id }, req.body)
    res.send({success : true, info: result });
})


module.exports = app;

/*


        });
    });
});

*/