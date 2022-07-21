const express = require("express");
const { load } = require("mime");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname + "/public/");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/LengthConverter", (req, res) => {
  res.sendFile(staticPath + "LengthConverter.html");
});
app.get("/BMI_calculator", (req, res) => {
  res.sendFile(staticPath + "BMI.html");
});
app.get("/MassConverter", (req, res) => {
  res.sendFile(staticPath + "Mass.html");
});
app.get("/TemperatureConverter", (req, res) => {
  res.sendFile(staticPath + "Temperature.html");
});

app.listen(port);
