const bcrypt = require('bcryptjs');

const factory = require('../factories');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await factory.create('User')

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);

  });
})