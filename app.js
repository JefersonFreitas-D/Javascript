const express = require('express'); //importa o express
const exphbs = require('express-handlebars');
const path = require('path');
const app = express(); //inicia o express
const db = require('./.db/conections') //importa a conexao com o banco de dados
const bodyParser = require('body-parser');
//testa a conexao com o banco de dados
const Job = require('./models/Job');
const Sequelize = require('sequelize');
const Op = Sequelize.Op; //operadores do sequelize
const PORT= 3000;

const router = express.Router(); //inicia o router


app.listen(PORT, function(){ //inicia o servidor
    console.log(`Express rodando na porta ${PORT}`)
});

app.use(bodyParser.urlencoded({extended:false})) //configura o body-parser

app.set('views', path.join(__dirname, 'views'));//configura o caminho das views
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'})); //configura o handlebars
app.set('view engine', 'handlebars'); //configura o handlebars como view engine

app.use(express.static(path.join(__dirname, 'public'))); //configura a pasta public como estatica

db.authenticate() //testa a conexao

.then(() => { //se conectar 
    console.log("Conexão com o banco de dados realizada com sucesso.")
}).catch(err => {
    console.log("Houve um erro na conexão", err)
}); 






app.get('/', (req, res) => { //rota principal

  
let search = req.query.job;
let query = '%' + search + '%' //formata a busca para o banco de dados

if(!search) {

  Job.findAll({order:[ //busca todos os jobs no banco de dados
    ['createdAt', 'DESC'] //ordena por data de criação decrescente
  ]})


  .then(jobs => res.render('index', {jobs



  })) //renderiza a view index

.catch(err => console.log(err));

} else{
    Job.findAll({
      where:{Titulo: {[Op.like]: query}},
      order:[ //busca todos os jobs no banco de dados
    ['createdAt', 'DESC'] //ordena por data de criação decrescente
  ]})


  .then(jobs => res.render('index', {jobs, search //renderiza a view index

  })) 

  .catch(err => console.log(err));

  }

console.log("Requisicão feita com sucesso")
});



app.use('/jobs', require('./rotas/jobs')); //importa as rotas de jobs

