const { factory } = require('factory-girl');

const User = require('../src/database/models/User');

factory.define('User', User, {
  name: 'Eric',
  email: 'eric@email.com',
  password: '123456',
});

module.exports = factory;
