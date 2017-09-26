'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.addColumn(
        'Friendships',      //nameOfAnExistingTable
        'TOuserId',           //nameOfTheNewAttribute
        {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'User',
            key: 'id'
          }
        }
      );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Gabbles', 'userId')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
