const request = require('supertest');

const app = require('../../src/app');
const truncate = require('../utils/truncate');
const factory = require('../factories');

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should authentication with valid credential', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    console.log(user);

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456',
      });


    expect(response.status).toBe(200);

  });

  it('should not authentication with invalid credential', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123451',
      });


    expect(response.status).toBe(401);
  });

  it('should return jwt token when authenticated', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456',
      });


    expect(response.body).toHaveProperty('token');
  });
});