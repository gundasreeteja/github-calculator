const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //   res.send("This is a calculator");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var common = "Result is : ";
  console.log(req.body);
  switch (req.body.operations) {
    case "add":
      res.send(common + (Number(req.body.num1) + Number(req.body.num2)));
      break;
    case "subract":
      res.send(common + (Number(req.body.num1) - Number(req.body.num2)));
      break;
    case "multiply":
      res.send(common + Number(req.body.num1) * Number(req.body.num2));
      break;
    case "divide":
      res.send(common + Number(req.body.num1) / Number(req.body.num2));
      break;
    default:
      res.send("Operation not supported");
      break;
  }
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
