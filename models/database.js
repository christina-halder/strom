const pg = require('pg');
const connectionString = 'postgres://super:super@localhost:5432/strom_development';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
    'CREATE TABLE users(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });