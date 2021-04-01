const express = require("express");
const router = express.Router();
const index = require("./routes-controller/home/index");
const categories = require("./routes-controller/categories/categories");
const articles = require("./routes-controller/articles/articles");
const login = require("./routes-controller/login/login")

router.get("/", index.get);
router.get("/login", login.get)


router.get("/categories", categories.getIndex)
router.post("/categories/delete", categories.postDelete)
router.post("/categories/save", categories.postSave)
router.get("/categories/edit/:id", categories.getEdit)
router.post("/categories/update", categories.postUpdate)


router.get("/articles/", articles.getIndex)
router.get("/articles/new", articles.getNew)
router.post("/articles/save", articles.getSave)
router.post("/articles/delete", articles.postDelete)


module.exports= router;