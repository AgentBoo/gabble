// NOTE: Modules && controllers
const express = require('express'),
      encrypt = require('./../config/bcrypt').encrypt
      signupController = require('./signupController');

// function bcryptIt(req, res, next){
//     return bcrypt.hash(req.body.password, 13)
//                  .then((hash) => { req.body.password = hash; next() })
//                  .catch((err) => console.error(err));
// }

// NOTE: Express router
const router = express.Router();

      router.get('/signup', (req, res) => { res.render('signup') });
      router.post('/signup', (req, res) => { res.render('signup') });
      router.post('/signedup', encrypt, signupController.addUser, (req, res) => {
         res.render ('signup', { message: 'You are signed up!' })
      });


module.exports = router;
