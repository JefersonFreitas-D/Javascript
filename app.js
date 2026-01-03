const express = require('express'); //importa o express
const app = express(); //inicia o express
const db = require('./.db/conections') //importa a conexao com o banco de dados
const bodyParser = require('body-parser');
//testa a conexao com o banco de dados
const PORT= 3000;

const router = express.Router();


app.listen(PORT, function(){ //inicia o servidor
    console.log(`Express rodando na porta ${PORT}`)
});

app.use(bodyParser.urlencoded({extended:false})) //configura o body-parser

db.authenticate() //testa a conexao

.then(() => { //se conectar 
    console.log("Conexão com o banco de dados realizada com sucesso.")
}).catch(err => {
    console.log("Houve um erro na conexão", err)
}); 

app.get('/', (req, res) => { //rota principal
res.send("arroche aí máquina")
console.log("Requisicão feita com sucess")
});

app.use('/jobs', require('./rotas/jobs')); //importa as rotas de jobs

