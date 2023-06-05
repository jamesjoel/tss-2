const express = require("express");
const app = express();

app.use("/api/user/signup", require("../controllers/SignupController"));
app.use("/api/user/auth", require("../controllers/AuthController"));
app.use("/api/city", require("../controllers/CityController"));


module.exports = app;