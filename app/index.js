const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 8888;


app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))


app.listen


app.use('/api/posts', require('./routes/posts'))


app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})


let home = require('/routes/home.js')
let login = require('/routes/login.js')
let signup = require('/routes/signup.js')


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
