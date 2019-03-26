const queries = require('./query2_knex.js');
const database = require('./db_knex');
queries.addPerson(database.client, process.argv.slice(2));