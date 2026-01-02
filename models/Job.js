const Sequelize = require('sequelize');
const bd = equire('../.db/conections');

const Job = db.define('job', {
Título: {
    type: Sequelize.STRING
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
    type
}
});

module.exports = Job;

