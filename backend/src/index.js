const express = require('express');
const cors = require('cors');
const routes = require('./routes');

/**
 * Métodos HTTP:
 * 
 * GET: buscar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query: são parâmetros nomeados na rota após o símbolo de interrogação. Exemplos: servem
  * como filtros, paginação
  * Route params: são parâmetros utilizados para identificar recursos (resources)
  * Request body: corpo da requisição utilizado para criar ou alterar recursos.
  */

  /**
   * Bancos de Dados
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   * 
   * Conexão com banco de dados
   * Driver: pacote oficial de banco de dados para o Node (SELECT * FROM users)
   * Query Builder: Knex.js -> (table('users').select('*).where())
   */
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
