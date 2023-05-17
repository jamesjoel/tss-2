require("../config/db")
const mongoose = require("mongoose");

var TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number,
    age : Number,
    address : String,
    city : String,
    email : String
})

module.exports = mongoose.model("teacher", TeacherSchema);