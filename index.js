var express = require("express");
var wretch = require("wretch");
var http = require("http");
var app = express();
global.fetch = require("node-fetch");

const baseUrl = "http://www.allomatch.com";

app.get("*.png", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  var request = http
    .get(`${baseUrl}${req.originalUrl}`, function(response) {
      res.writeHead(response.statusCode, {
        "Content-Type": response.headers["content-type"]
      });
      response.pipe(res);
    })
    .on("error", function(e) {
      console.log("Got error: " + e.message, e);
    });
});

app.get("*.jpg", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  var request = http
    .get(`${baseUrl}${req.originalUrl}`, function(response) {
      res.writeHead(response.statusCode, {
        "Content-Type": response.headers["content-type"]
      });
      response.pipe(res);
    })
    .on("error", function(e) {
      console.log("Got error: " + e.message, e);
    });
});


app.get("*", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  return wretch(`${baseUrl}${req.originalUrl}`)
    .get()
    .json(result => {
      res.json(result);
    });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
