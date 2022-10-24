const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("News API");
});

app.listen(port, () => {
  console.log("Hello");
});

const categories = require("./data/Categories.json");
app.get("/news-categories", (req, res) => {
  res.send(categories);
});
