var express = require("express");

var app = express();

//primarily introducing code smell in the code
const random = () => {
  console.log(
    "this is a random function written toi introduce code smells in your code"
  );

  return;
};

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
