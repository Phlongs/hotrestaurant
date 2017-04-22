var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// create the connection information for the sql database

var app = express();
var PORT = 3000;
var tables = [];
//Sets up the Express app to handle data parsing
//Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "hotreshome.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "waitinglist.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});


app.get("/api/:tables?", function(req, res) {
  var chosen = req.params.tables;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < tables.length; i++) {
      if (chosen === tables[i]) {
       return res.json(tables[i]);
      }
    }
    return res.json(tables);
  }
  return res.json(false);
});

//Create New table- takes in JSON input
app.post("/api/tables", function(req, res) {
  var newtable = req.body;

  console.log(newtable);

  tables.push(newtable);

  res.json(newtable);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3000,
//   // Your username
//   user: "root",
//   // Your password
//   password: "Book1234",
//   database: "hotrestaurant"
//
// });
// // connect to the mysql server and sql database
// connection.connect(function(err) {
//   if (err) throw err;
// });
