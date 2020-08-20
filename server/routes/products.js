const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const Product = require("../model/Product");

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.json({ message: "Product not found." });
  }
});

router.post(
  "/",
  [
    body("title").isLength({ min: 6 }),
    body("description").isLength({ min: 6 }),
    body("price").isLength({ min: 3 }),
    body("imageUrl").isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const product = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      imageUrl: req.body.imageUrl
    });

    try {
      const savedProduct = await product.save();
      res.send(savedProduct);
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

router.put(
  "/:id",
  [
    body("title").isLength({ min: 6 }),
    body("description").isLength({ min: 6 }),
    body("price").isLength({ min: 3 }),
    body("imageUrl").isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      product.title = req.body.title;
      product.description = req.body.description;
      product.price = req.body.price;
      product.imageUrl = req.body.imageUrl;
      product.save();
      res.json({ message: "Product has been updated." });
    } catch (error) {
      res.json({ message: "Product not found." });
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product.delete();
    res.json({ message: "Product has been deleted" });
  } catch (error) {
    res.json({ message: "Product not found." });
  }
});

module.exports = router;
