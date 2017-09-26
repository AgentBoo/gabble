// NOTE: Modules                                              -- btw, db config is basically in ./models/index.js??
const express = require('express'),
      mustacheExpress = require('mustache-express'),
      bodyParser = require('body-parser'),
      bcrypt = require ('bcrypt'),
      session = require('express-session');

// NOTE: Routers
const routerSignUp = require('./controllers/signupRoute.js'),
      routerLogIn = require('./controllers/loginRoute.js'),
      routerGabble = require('./controllers/gabbleRoute.js');

// NOTE: Port
const port = process.env.PORT || 3000;

// NOTE: Express app setup
const app = express();
      app.engine('mustache', mustacheExpress());
      app.set('view engine', 'mustache');
      app.set('views', './views');
      app.use('/public', express.static('public'));
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended:true }));
      app.use(session({
          secret: 'iscreamyouscreamgimmethatgimmethat icecream',
          resave: false,
          saveUninitialized: true }));

// Routers
      app.use('/', routerSignUp);
      app.use('/', routerLogIn);
      app.use('/', routerGabble);


// Sync database + make default users
// const models = require('./models');
// models.sequelize.sync()
//       .then(() => console.log("Sequelize synced?"))
//       .catch((err) => console.err(err))
// const initialSequelize = require('./sequelizeDefaultUsers');
//       app.use(initialSequelize());

// Main routes handler
      app.get('/', (req, res) => res.render('index'));


// Listen to port
      app.listen(port, (err) => (!err) ? console.log('gabble babble gabble gabble babb babble at ' + port) : console.error(err));

// I can also do:
// app.set("port", (process.env.PORT || 3000} );
// app.listen(app.get("port"), () => console.log("You got served") );
// if in shell, PORT 3000 npm start -- that falls under process.env.PORT
// if in shell, export PORT 3000, which sets $PORT to 3000 -- that falls under process.env.PORT
