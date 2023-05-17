require("../config/db")
const mongoose = require("mongoose");

var MySchema = mongoose.Schema({
    name : String,
    contact : String
})

module.exports = mongoose.model("mycollection", MySchema);