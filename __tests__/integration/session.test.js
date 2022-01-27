const User = require('../../src/database/models/User');

describe("Authentication", () => {
  it("should create a user in database", async () => {
    const user = await User.create({
      name: "Eric",
      email: "eric@email.com",
      password_hash: "123456",
    });

    exprect(user.email).toBe("eric@email.com");
  });
});