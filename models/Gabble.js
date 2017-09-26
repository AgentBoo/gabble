'use strict';
module.exports = function(sequelize, DataTypes) {
  var Gabble = sequelize.define('Gabble', {
    text: DataTypes.CHAR(140),
    likedBy: DataTypes.ARRAY(DataTypes.STRING)
  }
    // {
    // classMethods: {
      // associate: function(models) {
      //   // associations can be defined here
      //   Gabble.belongsTo(models.User, {
      //     foreignKey: 'userId'
      //   })
      // }
    // }
  );

  Gabble.associate = function(models) {
    // associations can be defined here
    Gabble.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  }

  return Gabble;
};



// NOTE: Apparently, there is a big leap between sequelize 3.x and 4.x
// http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html

// http://docs.sequelizejs.com/variable/index.html

// I ran sequelize model:create --name Gabble --attributes "text:string likedBy:string"
// then, I changed the data types on both columns in psql to varchar(140) and string[]
// then, I changed data types in the migration and model =/ yea, I know

// psql createdb
// ALTER TABLE "Gabbles" ALTER COLUMN text TYPE varchar(140);
// ALTER TABLE "Gabbles" ALTER COLUMN "likedBy" type text[] USING "likedBy"::text[];
// check it out with \d+ "Gabbles"


// also, btw
// INSERT INTO "Gabbles" (text, "likedBy", "createdAt", "updatedAt") VALUES ('Blackpink: Boombayah', '{Myself, MyOtherSelf, Eddie}', '2017-09-09 22:22:22', '2017-09-09 22:22:22');
