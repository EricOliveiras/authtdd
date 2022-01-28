const request = require('supertest');

const User = require('../../src/database/models/User');
const app = require('../../src/app');
const truncate = require('../utils/truncate');

require('../../src/database/')

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should authentication with valid credential', async () => {
    const user = await User.create({
      name: 'Eric',
      email: 'eric@email.com',
      password_hash: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'eric@email.com',
        password: '123451',
      });


    expect(response.status).toBe(200);

  });
});