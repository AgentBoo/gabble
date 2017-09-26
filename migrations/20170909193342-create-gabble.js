'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Gabbles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        allowNull: false,
        type: Sequelize.CHAR(140)
      },
      likedBy: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdAt: {
        allowNull: false,
        defaultValue: DATE.now(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: DATE.now(),
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Gabbles');
  }
};


// http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types
