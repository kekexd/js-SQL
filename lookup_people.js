const queries = require('./queries');
const database = require('./database')
queries.getInfo(database.client, process.argv[2]);
console.log(`Searching...`)
