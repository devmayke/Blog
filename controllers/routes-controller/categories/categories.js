const Category = require("../../../models/Category")
const slugify = require("slugify")

module.exports = {
    getNew:(req, res)=>{
        res.render('newCategory')
    },
    post:(req, res)=>{    
        let title = req.body.title;
        if(title){   
            Category.create({
                title: title,
                slug: slugify(title).toLowerCase()
            }) 
            .then (()=>{
                res.redirect("/categories/new") 
            })
        }else{
            res.redirect("/categories/new")
        }
    },
    getIndex:(req, res)=>{

        Category.findAll({raw:true})
        .then((categories)=>{
            res.render("indexCategory", {categories:categories})
        })
        .catch((err)=>{
            console.log(erro)
        })
        
    }
}