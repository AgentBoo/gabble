'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.addColumn(
        'Gabbles',      //nameOfAnExistingTable
        'userId',      //nameOfTheNewAttribute
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


// I created an empty migration first
// sequelize migration:create --name add-user-id-to-gabble
// then, populated with .addColumn() and .removeColumn()

// also, fixed my gabbledb to reflect the changes
