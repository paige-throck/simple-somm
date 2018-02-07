const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')[process.env.ENVIRONMENT];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);

// filterInt - The function from MDN that confirms a particular value is actually an integer. Because parseInt isn't quite strict enough.
const filterInt = function(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
};

function restrict(req,res,next){
try{
  if(req.session.email){
    next();
  }else{
    res.send('failed');
    res.end();
  }
}
catch(err){
  res.send('failed');
  res.end();
}
};


router.post('/', function(req, res, next) {
  console.log('Received login info:', req.body);
  knex('users')
    .where('email', req.body.email)
    .then(function(usersData) {
      user = usersData[0];
      console.log('Found user in database', user);

      // error if password entered does not match password in database
      if(!bcrypt.compareSync(req.body.password, user.password)) throw 400;
      console.log('Password is valid');
      console.log();
      req.session.email = user.email;
      req.session.userid = user.id;
      
      res.json(user);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });

})





module.exports = router;
