const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 8888;
const http = require('http');


const home = require('/routes/home')
const login = require('/routes/login')
const signup = require('/routes/signup')
const users = require('/routes/users')
const wines = require('/routes/wines')
const parings = require('/routes/pairings')


app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

app.use('/home', home);
app.use('/login', login);
app.use('/signup', signup);
app.use('/users', users);
app.use('/wines', wines);
app.use('/parings', pairings;


app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);


// default password = user’s name
// app.use(session({
//  secret: ‘as2OaDcE63sLd8aiFk4Px’,
//  resave: false,
//  saveUninitialized: true,
//  cookie: {
//    secure: false
//  }
// }));

// app.use(function(req, res, next) {
//  console.log(‘Session is: ’, req.session);
//  next();
// });


// app.use(loginRoute);
// app.use(signupRoutes);


// app.use(function(req, res, next) {
//  if(!req.session.username) {
//    console.log(‘redirecting’);
//    res.redirect(‘/’)
//  } else {
//    console.log(‘not redirecting’);
//    next();
//  }
// });


app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})


app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.log(err)
  res.status(err.status || 500)
  res.json(err)
})



module.exports = app
