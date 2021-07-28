'use strict';
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "El nombre solo puede contener letras"
        },
        len: {
          args: [2, 255],
          msg: "El nombre debe tener un minimo de 2 caracteres"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Ingrese un correo válido"
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "La contraseña debe contener un minimo de 6 caracteres"
        }
      }
    },
  }, {
    tableName: "users"
  });
  User.isAdmin = function(roles) {
    let tmpArray = [];
    roles.forEach(role => tmpArray.push(role.role));

    return tmpArray.includes('admin');
  }
  User.associate = function(models) {
    User.hasMany(models.Post, {as: "posts", foreignKey: "userId"});
    User.belongsToMany(models.Role, { as: "roles", through: "user_role", foreignKey: "user_id" });
  };

  return User;
};