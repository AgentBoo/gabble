const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')

module.exports = {
  encrypt: function(req, res, next){
           return bcrypt.hash(req.body.password, 13)
                        .then((hash) => { req.body.password = hash; next() })
                        .catch((err) => console.error(err));

  },

  validate: function(password, hash){
            bcrypt.compare(password, hash)
                  .then((res) => res )
                  .catch((err) => console.error(err))
  }
}
