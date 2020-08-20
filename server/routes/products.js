const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const Product = require("../model/Product");

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
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

router.put("/:id", (req, res) => {
  res.send("Update product here");
});

router.delete("/:id", (req, res) => {
  res.send("Delete product here");
});

module.exports = router;
