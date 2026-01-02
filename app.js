const express = require('express'); //importa o express
const app = express(); //inicia o express
const db = require('./.db/conections') //importa a conexao com o banco de dados

//testa a conexao com o banco de dados
const PORT= 3000;

app.listen(PORT, function(){ //inicia o servidor
    console.log(`Express rodando na porta ${PORT}`)
});

db.authenticate() //testa a conexao

.then(() => { //se conectar 
    console.log("Conexão com o banco de dados realizada com sucesso.")
}).catch(err => {
    console.log("Houve um erro na conexão", err)
}); 

app.get('/', (req, res) => { //rota principal
res.send("arroche aí máquina, vai dar certo baitola, preocupe não, tú é 10 mofi")
console.log("Requisicão feita com sucess")
});
