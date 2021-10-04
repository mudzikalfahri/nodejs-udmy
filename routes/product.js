const Product = require("../models/product");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", (req, res) => {
  res.send("product route");
});

module.exports = router;
