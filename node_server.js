var express = require("express");
var app = express();
var { PythonShell } = require("python-shell");

// END POINT IN BROWSER
// http://localhost:3000/pyscript?string1=hello&string2=python%20world

app.get("/pyscript", callD_alembert);

function callD_alembert(req, res) {
  var options = {
    args: [
      req.query.string1, // hello
      req.query.string2 // python world
    ]
  };
  PythonShell.run("./normalizer.py", options, function(err, data) {
    console.log("\ndata from pyScript: ", data, "\n");
    if (err) res.send(err);
    // res.send(data);
    res.send(data.toString());
  });
}

app.listen(3000, function() {
  console.log("server running on port 3000");
});
