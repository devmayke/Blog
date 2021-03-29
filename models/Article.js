const Sequelize = require("sequelize")
const connection = require('./database')

const Article = connection.define("articles",{
    body:{
        type: Sequelize.TEXT,
        allowNull: true
    }
})
// Article.sync({force:true}).then(()=>{
//     console.log("Tabela 'Article' criada com sucesso...")
// }).catch((err)=>{
//     console.log(err)
// });

module.exports = Article;