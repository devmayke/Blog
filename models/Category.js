const Sequelize = require("sequelize");
const connection = require("./database");
const Article = require("./Article") 


const Category = connection.define("categories", {
    title:{
        type:Sequelize.STRING,
        allowNull: true
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:true
    }
});


Category.hasMany(Article);
Article.belongsTo(Category);

// Category.sync({force:true}).then(()=>{
//     console.log("Tabela 'Category' criada com sucesso...")
// }).catch((err)=>{
//     console.log(err)

// });


module.exports = Category;