const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const usuario = require("./controllers/index");
const path = require("path")
const connection = require('./models/database')
const Article = require("./models/Article")
const Category = require("./models/Category")
const Cadastro = require("./models/Cadastro")








app.set("view engine", "ejs");

connection.authenticate()
.then(()=>{
    console.log("Conectado ao Banco de dados")
})
.catch((err)=>{console.log( "ERRO >>>  "+ err);})

Cadastro.create({
    usuario: "Mayke",
    password: "Codebase1@1"
}).then(()=>{
    console.log("usuario criado com sucesso..")
}).catch((err)=>{
    console.log(err)
})


app.use(express.static(path.join(__dirname,"public")))
   

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


app.use("/", usuario)


app.listen(PORT, ()=>{
    console.clear()
    console.log("Servidor conectado...")
})