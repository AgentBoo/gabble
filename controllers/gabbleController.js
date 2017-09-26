const models = require('./../models');
const bcrypt = require('bcrypt');
const session = require('express-session')

module.exports = {
  // Hi: function(req, res){console.log('Hi'), res.send('Hi')},
  createGab: function(req, res, next){
            //  models.Gabble.create({ text: req.body.text, createdAt: Date.now(), updatedAt: Date.now() })
             models.Gabble.create({ text: req.body.text })
                          .then(() => {
                             console.log('Gab created !');
                             next() })
                          .catch((err) => console.error(err) );
  },
  likes: function(req, res, next){
         models.Gabble.findById(req.params.id)
                      .then((gabble) => { gabble.likedBy.push(req.body.like);
                gabble.update({ likedBy: gabble.likedBy, updatedAt: Date.now() })
                      .then(() => {
                          console.log('Like saved !');
                          next() })
                      .catch((err) => console.error(err))
                    }).catch((err) => console.error(err) );
  },
  gabbles: function(req, res, next){
           models.Gabble.findAll({
                               attributes: {
                                 exclude: ['updatedAt','userId']},
                                 include: [{
                                    required: true,
                                    model: models.User,
                                    include: [{
                                      required: true,
                                      model: models.Friendship,
                                      where: {
                                        $and: { status: true,
                                          $or: { FROMuserId: req.session.user, TOuserId: req.session.user } }},
                                      }],
                                    }],
                                 order: [['createdAt', 'DESC']] })
                            .then((gabble) => {
                               req.gabble = gabble;
                               console.log(JSON.stringify(gabble));
                               next() })
                            .catch((err) => console.error(err) );

  },

  delete: function(req, res, next){
          models.Gabble.findById(req.params.id)
                       .then((gabble) =>
                 gabble.destroy()
                       .then(() => {
                           console.log('Gabble deleted !');
                           next() })
                       .catch((err) => console.error(err))
                      ).catch((err) => console.error(err) );
  }

};



// test
// INSERT INTO "Gabbles" (text, "likedBy", "createdAt", "updatedAt", "userId") VALUES ('This is a test, yea. Also, Parov Stellar', '{Me, You, Parov}', '2017-10-10 10:10:10', '2017-10-10 11:11:11', (SELECT id FROM "Users" WHERE id = 10));
// select "text", "Gabbles"."createdAt", "userId", "username"
  // from "Gabbles"
  // inner join "Friendships" on "Friendships"."FROMuserId" = "Gabbles"."userId" or "Friendships"."TOuserId" = "Gabbles"."userId"
  // inner join "Users" on "Gabbles"."userId" = "Users".id
    // where "FROMuserId" = 44 or "TOuserId" = 44;
