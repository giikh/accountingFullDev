const express = require("express");
var path = require("path");
// require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const fetch = require("node-fetch");
// const useragent = require("useragent");
// const session = require("express-session");

const pageRouter = require("../api/page/pageParameters");

const app = express();

const corsOptions = {
  origin: ["http://localhost:8080"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "../dist")));
app.use("/static", express.static("./app/api/assets"));
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

app.use("/backend", pageRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

module.exports = app;
