const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
//rota para adicionar um novo job 

router.get('/test', (req, res) => {

    res.send("rota de teste funcionando")
});

router.post('/add', (req, res) => { //recebe os dados do formulario

let{title, description, salary, company, email, new_job} = req.body;


Job.create({ //adiciona um novo job no banco de dados
Título: title,
description: description,
Salário: salary,
Empresa: company,
email: email,
new_job: new_job

})
.then(() => res.redirect('/'))
.catch(err => console.log(err));


});

module.exports = router;