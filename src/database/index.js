const Seqquelize = require('sequelize');

const configDB = require('../config/database');

const connection = new Seqquelize(configDB);

connection.authenticate()
  .then(() => { console.log('Connection has been established successfully.'); })
  .catch(() => { console.log('Unable to connect to the database.'); });

module.exports = connection;