// NOTE: Modules && controllers
const express = require('express');
      gabbleController = require('./gabbleController');

// NOTE: Express router
const router = express.Router();

      // router.post('/gabble', (req, res) => { res.render('index') });
      router.post('/createdgab', gabbleController.createGab, (req, res) => {
         res.send('Oooh yea');
      });

      router.get('/gabble', gabbleController.gabbles, (req, res) =>
        res.render('gabbleHome', { gabble: req.gabble}) );

      router.post('/gabble', (req, res) => res.redirect('/gabble') );

      router.post('/delete/:id', gabbleController.delete, (req, res) => res.redirect('/gabble'));

      router.post('/likes/:id', gabbleController.likes, (req, res) => { console.log(req.body.like); res.redirect('/gabble') });


module.exports = router;
