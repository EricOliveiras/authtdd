const { Model, DataTypes } = require("sequelize");

class User extends Model {}

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password_hash: DataTypes.STRING, 
}), {
  sequelize: Sequelize,
}

User.sync();

module.exports = User;