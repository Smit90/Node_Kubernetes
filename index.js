var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.json({
    response: "Welcome to CI CD Pipeline",
  });
});

app.get("/about", function (req, res) {
  res.json({
    response: "CI/CD pipeline with jenkins and kubernetes deployment",
  });
});

app.get("/ready", function (req, res) {
  res.json({
    response: "Great!, It works!",
  });
});

app.listen(process.env.PORT || 3000);
module.exports = app;
