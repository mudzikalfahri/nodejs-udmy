const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRoute = require("./routes/product");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to db"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/products", productRoute);

app.listen(3000);
