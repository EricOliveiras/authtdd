const User = require('../../src/database/models/User');
require('../../src/database/')

describe('Authentication', () => {
  it('should create user', async () => {
    const user = await User.create({
      name: 'Eric',
      email: 'eric@email.com',
      password_hash: '123456',
    });
      
    console.log(user);

    expect(user.name).toBe('Eric'); 
  });
});