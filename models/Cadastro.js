const Sequelize = require("sequelize")
const connection = require ("./database")

const Cadastro  = connection.define("cadastro", {
    usuario:{
        type: Sequelize.STRING,
        allowNull:false
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Cadastro;