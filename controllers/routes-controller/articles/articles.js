const Category = require("../../../models/Category")
const Article = require("../../../models/Article")
const slugify = require("slugify")
module.exports = {
    getNew:(req, res)=>{

        Category.findAll({raw:true, order:[['id','DESC']]})
        .then(categories=>{
            res.render("article/indexArticles", {categories:categories})
        })       
    },
    getSave:(req, res)=>{
        let title = req.body.title
        let body = req.body.body
        let category = req.body.category
        console.log(title, body, category)
        Article.create({
            title: title,
            slug:slugify(title).toLowerCase(),
            body:body,
            categoryId:category
        })
        .then(()=>{
            res.redirect("/articles")
        }).catch((err)=>{
            console.log(err)
        })
    },
    getIndex:(req, res)=>{
        Article.findAll({include:[{model:Category}]})
        .then((articles)=>{
            res.render("article/articles", {articles:articles})

        })

    },
    postDelete:(req, res)=>{
        let id = req.body.id;
        console.log(id)        
        Article.destroy({where:{id:id}, restartIdentity: true })
        .then(()=>{
            res.redirect("/articles")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}