const Sequelize = require('sequelize');
const db = require('../.db/conections');

const Job = db.define('job', {
Título: { // Nome da tabela no banco de dados
    type: Sequelize.STRING // Tipo de dado da coluna
},
description: {
    type: Sequelize.STRING
},
Salário: {
    type: Sequelize.STRING
},
Empresa: {
    type: Sequelize.STRING
},
email:{
    type:Sequelize.STRING
},
Novo_job: {
    type: Sequelize.INTEGER
}
});

module.exports = Job;

