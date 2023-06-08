const express = require("express");
const app = express();

app.use("/api/user/signup", require("../controllers/SignupController"));
app.use("/api/user/auth", require("../controllers/AuthController"));
app.use("/api/city", require("../controllers/CityController"));
app.use("/api/user/profile", require("../controllers/ProfileController"));
app.use("/api/category", require("../controllers/CategoryController"));


module.exports = app;