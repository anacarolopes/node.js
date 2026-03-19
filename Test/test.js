const Sequelize = require('sequelize')
const sequelize = new Sequelize('nome do DB', 'usuario do banco', 'senha', {
    host: "local do banco (ex.: localhost)",
    dialect: 'tipo do banco de dados (ex.: mysql)'
})

sequelize.authenticate().than(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})