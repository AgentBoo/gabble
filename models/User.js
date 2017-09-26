'use strict';
const bcrypt = require('bcrypt'),
      bodyParser = require('body-parser');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    displayedName: DataTypes.STRING,
    password: DataTypes.STRING
  },
  //   {
  //     hooks: {
  //       afterValidate: function(user) {
  //             bcrypt.hash(user.password, 13)
  //                   .then((hash) => user.password = hash)
  //                   .catch((err) => console.error(err))} }
  // }
);

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Gabble, {
      foreignKey: 'userId'
    });

    User.hasMany(models.Friendship, {
      foreignKey: 'FROMuserId'
    });

    User.hasMany(models.Friendship, {
      foreignKey: 'TOuserId',
      sourceKey: 'id'
    });

  }

  return User;
};


// NOTE: Apparently, there is a big leap between sequelize 3.x and 4.x
// http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html
// ... stupid updates
