const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

/**
 * Rotas / recursos
 */

/**
 * Metodos HTTP:
 * 
 * GET: buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */
/**
 * Tipos de parametros:
 * 
 * Query: Parametros nomeados enviados na rota apos ""?" (Filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request body: Corpo da requisição utilizado para criar ou alterar recursos
 */
/**
 * SQL: MySql, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB etc
 */


app.listen(3333);

