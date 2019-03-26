//const queries = require('./queries');
//const database = require('./database');
const queries = require('./query_knex');
const database = require('./db_knex');
queries.getInfo(database.client, process.argv[2]);
console.log(`Searching...`)
