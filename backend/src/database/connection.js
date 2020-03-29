const knex = require('knex');
const configuration = require('../../knexfile'); //importa o arquivo de configurações do banco de dados

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;
const connection = knex(config); //cria a conexão passando as configurações de development

module.exports = connection;