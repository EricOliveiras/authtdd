const { faker } = require('@faker-js/faker');
const { factory } = require('factory-girl');

const User = require('../src/database/models/User');

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

module.exports = factory;
