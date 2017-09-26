'use strict';
module.exports = function(sequelize, DataTypes) {
  var Friendship = sequelize.define('Friendship', {
    status: DataTypes.BOOLEAN
  }
    // {
    // classMethods: {
      // associate: function(models) {
        // associations can be defined here
    // }
  );

  Friendship.associate = function(models) {
    // associations can be defined here
    Friendship.belongsTo(models.User, {
      foreignKey: 'FROMuserId',
      sourceKey: 'id'
    });

    Friendship.belongsTo(models.User, {
      foreignKey: 'TOuserId',
      sourceKey: 'id'
    });
  };


  return Friendship;
};
