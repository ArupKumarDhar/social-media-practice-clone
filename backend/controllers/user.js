const Product = require("../models/User.js");
exports.products = (req, res) => {
  const user = {
    name: "Walton",
    brand: "Walton",
    price: 600,
  };

  const userData = new Product(user);
  userData.save();
  res.send("Hello node js from controllers");
};

exports.appis = (req, res) => {
  const app = {
    name: "app",
    brand: "app",
    price: 600,
  };

  const userData = new Product(app);
  userData.save();
  res.send("Hello node js from controllers appis");
};
