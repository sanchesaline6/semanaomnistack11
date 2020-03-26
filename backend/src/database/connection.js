const knex = require('knex');
const configuration = require('../../knexfile'); //importa o arquivo de configurações do banco de dados

const connection = knex(configuration.development); //cria a conexão passando as configurações de development

module.exports = connection;