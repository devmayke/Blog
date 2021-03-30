const Sequelize = require('sequelize');


const connection = new Sequelize("site-blog", "root", "Codebase1@1",{
    host:"localhost",
    dialect:"mysql"
});

module.exports = connection;