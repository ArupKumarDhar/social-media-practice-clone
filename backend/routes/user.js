const express = require("express");
const app = express();
const { products, appis } = require("../controllers/user");

app.get("/products", products);
app.get("/app", appis);

module.exports = app;
