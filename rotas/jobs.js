const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
//rota para adicionar um novo job 

router.get('/test', (req, res) => { 

    res.send("rota de teste funcionando")
});


router.get('/view/:id', (req, res) => Job.findOne({ 
    where: {id: req.params.id} //busca o job pelo id
}).then(job => {
    res.render('view', {job

    });

}).catch(err => console.log(err))); //rota para ver os detalhes do job


router.get('/add', (req, res) => { 
    res.render('add');
});//rota para o formulario de adicionar job

router.post('/add', (req, res) => { //recebe os dados do formulario

let{title, description, salary, company, email, new_job} = req.body; //desestrutura o req.body


Job.create({ //adiciona um novo job no banco de dados
Titulo: title,
description: description,
Salario: salary,
Empresa: company,
email: email,
new_job: new_job

})
.then(() => res.redirect('/'))
.catch(err => console.log(err));


});

module.exports = router;//exporta o router