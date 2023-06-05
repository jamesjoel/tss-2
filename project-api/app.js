const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./config/routes");

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
// localhost:3001
app.use(cors());
// Disabled the CORS Policy
app.use(routes);




const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("server running with port, ", port)
})