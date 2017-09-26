const models = require('./../models');

module.exports = {
  // Hi: function(req, res){console.log('Hi'), res.send('Hi')},
  addUser: function(req, res, next){
          //  models.User.create({ username: req.body.username, displayedName: req.body.displayedName, password: req.body.password, createdAt: Date.now(), updatedAt: Date.now() })
           models.User.findAll({
                           attributes: ['username'],
                           where: {username: req.body.username} })
                      .then((user) => {
                           if (user[0] != null){
                               return res.render('signup', { message: 'This username already exists'});

                         } else if (user[0] == null){
                               models.User.create({
                                             username: req.body.username,
                                             displayedName: req.body.displayedName,
                                             password: req.body.password })
                                          .then((user) => {
                                             console.log('User created !');
                                             req.body.password = "";
                                             next() })
                                          .catch((err) => { console.error(err) });}
                    }).catch((err) => console.error(err) );

  }

};
