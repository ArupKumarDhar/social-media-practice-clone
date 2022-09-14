const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { readdirSync } = require("fs");
const user = require("./routes/user");
const dotenv = require("dotenv");

// dotenv
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

// routes
readdirSync("./routes").map((f) => app.use("/", require(`./routes/${f}`)));

// mongodb connection
const mongodb_url = process.env.MONGODB_URL;

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Mongodb is connected");
});

//port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
