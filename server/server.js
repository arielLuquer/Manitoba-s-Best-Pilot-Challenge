const express = require('../node_modules/express');
const app = express();

const XLSX = require("../node_modules/xlsx");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("here");
    res.render("index", { text: "world" });
});

app.listen(3000);