const Article = require("../../../models/Article")
const Caregory = require("../../../models/Category")


module.exports = {
        get:(req, res)=>{

            Article.findAll({raw:true, order:[["id", "DESC"]]})
            .then((articles)=>{
                res.render("home/index", {articles})

            })
     
    }
}