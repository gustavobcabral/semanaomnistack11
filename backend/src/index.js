const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar uma iformacao do Back-end
 * POST: Cria uma informacao no Back-end
 * PUT: Altera uma informacao no Back-end
 * DELETE: Deleta uma indormacao no Back-end
 */

/**
 * Tipos de parametros:
 *
 * Query params: Parametro nomeados enviados na rota apos "?" (filtros, paginação)
 * Route params: Parametro utilizado para indetificar recursos
 * Request Body: Corpo da requisiçao, utilizado para criar ou alterar recursos
 */

/**
 * SQL : MySQL, SQLite, PostgreSQL, Oracle, Microsft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
