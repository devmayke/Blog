const Sequelize = require("sequelize")
const connection = require('./database')
const Category = require("./Category")

const Article = connection.define("articles",{
    title:{
        type: Sequelize.STRING,
        allowNull: true
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    slug:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

Category.hasMany(Article);
Article.belongsTo(Category);


Article.sync({force:true}).then(()=>{
    console.log("Tabela 'Article' criada com sucesso...")
}).catch((err)=>{
    console.log(err)
});

module.exports = Article;