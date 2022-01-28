const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

    User.prototype.checkPassword = function(password) {
      return bcrypt.compare(password, this.password_hash);
    };

    User.prototype.generateToken = function() {
      return jwt.sign({ id: this.id }, process.env.APP_SECRET)
    };

    return this;
  }
}

module.exports = User;