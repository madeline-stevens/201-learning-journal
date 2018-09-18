var fs = require("fs");

fs.readFile("bestthingsever.txt", "utf8", function(err, contents) {
  if (err) {
    console.log(err);
  }

  var bestThings = contents.split(",");
  console.log(bestThings);
});
