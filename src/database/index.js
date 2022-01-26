const Seqquelize = require('sequelize');

const configDB = require('../config/database');
const User = require('../database/models/User');

const connection = new Seqquelize(configDB);

connection.authenticate()
  .then(() => { console.log('Connection has been established successfully.'); })
  .catch(() => { console.log('Unable to connect to the database.'); });

User.init(connection);

module.exports = connection;