const app = require("express").Router();
const Product = require("../models/Products")
const path = require("path");

app.post("/", async(req, res)=>{
    // console.log(JSON.parse(req.body.data));
    // console.log(req.files.file);
    let formdata = JSON.parse(req.body.data);
    let file = req.files.file;

    formdata.image = file.name;

    file.mv(path.resolve()+"/assets/upload/"+file.name, async (err)=>{

        let result = await Product.create(formdata);
        res.send({success : true, info: result });
    });
    
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
{
    name : "rohit",
    age : 25
}


'{ "name" : "rohit", "age" : "25"}'



*/