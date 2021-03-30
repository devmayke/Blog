const Category = require("../../../models/Category")
const slugify = require("slugify")

module.exports = {
    postSave:(req, res)=>{    
        let title = req.body.title;
        if(title){   
            Category.create({
                title: title,
                slug: slugify(title).toLowerCase()
            }) 
            .then (()=>{
                res.redirect("/categories") 
            })
        }else{
            res.redirect("/categories")
        }
    },
    getIndex:(req, res)=>{

        Category.findAll({raw:true, order: [['id', 'DESC']]})
        .then((categories)=>{
            res.render("indexCategory", {categories:categories})
        })
        .catch((err)=>{
            console.log(err)
        })        
    },
    postDelete:(req, res)=>{
        let id = req.body.id;
        console.log(id)        
        Category.destroy({where:{id:id}, restartIdentity: true })
        .then(()=>{
            res.redirect("/categories")
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    getEdit:(req, res)=>{
        let id = req.params.id
        Category.findByPk(id)
        .then((category)=>{
            res.render("editCategory", {category:category})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}