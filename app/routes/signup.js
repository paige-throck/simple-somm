const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')[process.env.ENVIRONMENT];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);

//For new users, we need to get cuisine_lists and render the object with cuisine id and cuisine name, the id is passed into the user once the post is triggered. Once the new user is inserted we to grab the id, select all wine_ids based on that cuisine_id and then insert the ids into the wine_list table along with the user_id

router
.get('/signup', function(req, res) {
  res.render('signup.ejs');
})
.post('/signup', function(req, res, next) {
  console.log('In the signup route. Request body is:', req.body);
  knex('users')
    .where('email', req.body.email)
    .then(function(usersData) {

      return knex('users')
      .insert({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt)
      })
      .returning('id')
    })
    .then(function(userId) {
      console.log('Request email is:', req.body.email);

      req.session.email = req.body.email;
      req.session.userid = userId[0];
      console.log('This is the session object:', req.session);
      console.log('User id:', userId);

      res.redirect('/users');
    })
    .catch(function(err) {
      console.log(err);
      if (err) {
        res.redirect('/');
      }
      res.sendStatus(500);
    });

})






module.exports = router;
