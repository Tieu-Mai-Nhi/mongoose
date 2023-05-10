const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;
const morgan = require("morgan");
app.use(morgan("combined"));

const routerStudent = require("./routes");

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", routerStudent);

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
