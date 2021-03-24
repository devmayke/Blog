const express = require("express");
const router = express.Router();
const index = require("./routes-controller/home/index");
const categories = require("./routes-controller/categories/categories");
const articles = require("./routes-controller/articles/articles");


router.get("/", index.get);
router.get("/categories", categories.get)
router.get("/articles", articles.get)

module.exports= router;