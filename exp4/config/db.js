const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss2");

// mongoimport --db <dbname> --collection <collname> --file <filename> --jsonArray