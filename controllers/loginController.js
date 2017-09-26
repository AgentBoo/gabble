const models = require('./../models');
      bcrypt = require('bcrypt');
const      session = require('express-session');


module.exports = {
  // Hi: function(req, res){console.log('Hi'), res.send('Hi')},
  loginUser: function(req, res, next){
             models.User.findOne({
                            attributes: ['username', 'password', 'id'],
                            where: { username: req.body.username } })
                        .then((user) => {
                            bcrypt.compare(req.body.password, user.password)
                                  .then((result) => {
                                     if (result == true) {
                                       req.session.user = user.id;
                                       return next() } })
                                  .catch((err) => console.error(err))
                          })
                        .catch((err) => console.error(err) );
    },

};
