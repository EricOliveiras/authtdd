const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
      },
      {
        sequelize,
        hooks: {
          beforeSave: async (user) => {
            if(user.password) {
              user.password_hash = await bcrypt.hash(user.password, 8);
            };
          },
        },
      }
    );

    return this;
  }
}

module.exports = User;