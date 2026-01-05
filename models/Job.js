const Sequelize = require('sequelize');
const db = require('../.db/conections');

const Job = db.define('job', {
Titulo: { // Nome da tabela no banco de dados
    type: Sequelize.STRING // Tipo de dado da coluna
},
description: {
    type: Sequelize.STRING
},
Salario: {
    type: Sequelize.STRING
},
Empresa: {
    type: Sequelize.STRING
},
email:{
    type:Sequelize.STRING
},
new_job: {
    type: Sequelize.INTEGER
}
});

module.exports = Job;

