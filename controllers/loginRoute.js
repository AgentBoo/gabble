// NOTE: Modules && controllers
const express = require('express'),
      loginController = require('./loginController');

// NOTE: Express router
const router = express.Router();

      router.post('/login', (req, res) => { res.render('login') });
      router.post('/loggedin', loginController.loginUser, (req, res) => {
         res.redirect ('/gabble');
      });



module.exports = router;
