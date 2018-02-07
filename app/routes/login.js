const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')[process.env.ENVIRONMENT];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);


router.get('/', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
})



router.post('/', (req, res) => {
  let userObj = req.body;
  console.log(userObj);
  knex.select('*').from('users').where('email', userObj.email)
  .then((result) => {
    console.log(result);
    if (result.length===0) {
      return res.send('no account with that email');
    }
    return bcrypt.compare(userObj.password, result[0].password)
    .then ((loginCheck) => {
      if (loginCheck) { // If the passwords match, login.
        res.cookie('user', '1', { maxAge: 900000, httpOnly: true });
        req.session.userID = result[0].id;
        console.log('Passwords Match ', req.session);

        res.header("Access-Control-Allow-Origin", "*");
        return (req.session)
      }

      else { // If passwords don't match, send a 401.
        return res.sendStatus(401);
      }
    })
  })
});





module.exports = router;
