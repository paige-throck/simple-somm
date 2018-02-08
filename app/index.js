'use strict';

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 8888;
const http = require('http');

const cors = require('cors')
const expressCors = require('express-cors')


const home = require('./routes/home')
const login = require('./routes/login')
const signup = require('./routes/signup')
const profiles = require('./routes/profiles')
const wines = require('./routes/wines')




app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))
app.use(cors())
app.use(expressCors({
  allowedOrigins: [
    'http://localhost:3000/'
  ]
}))

//Setting up session
app.use(session({
  secret: 'drinking all the wine',
  resave: false,
  saveUninitialized: true,
  cookie : {
    secure : false
  }
}));

app.all('*',function(req, res, next){

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();

});


app.use('/', home);
app.use('/login', login);
app.use('/signup', signup);
app.use('/profiles', profiles);
app.use('/wines', wines);


app.set('port', port);
 // Create HTTP server.

const server = http.createServer(app);

// Listen on provided port, on all network interfaces.

server.listen(port);

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.get('/', (req, res, next) => {
  if (req.session.userID) {
    res.redirect(`/profiles/${req.session.userID}`);
  } else {
    next();
  }
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.log(err)
  res.status(err.status || 500)
  res.json(err)
})



module.exports = app
