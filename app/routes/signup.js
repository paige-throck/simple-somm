const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')[process.env.ENVIRONMENT];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);



//For new users, we need to get cuisine_lists and render the object with cuisine id and cuisine name, the id is passed into the user once the post is triggered. Once the new user is inserted we to grab the id, select all wine_ids based on that cuisine_id and then insert the ids into the wine_list table along with the user_id

router.get('/', function(req, res) {

  knex('cuisine_lists')
  .then((cuisineArr) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(cuisineArr);
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500);
      })
})

router.post('/', (req, res)=> {
  console.log(req.body);
  let newUserObj = req.body;
  let userId = req.body.id;
  knex.select('email').from('users').where('email', newUserObj.email)
  .then((result)=>{
    if (result.length !== 0) {
      return res.send('Email exists');
    }
    return bcrypt.hash(newUserObj.password, 10, (err, hash) => {
        newUserObj.hashpw = hash;
        knex('users').returning('id').insert({
          email : newUserObj.email,
          password : newUserObj.hashpw,
          name: newUserObj.name,
          cuisine_id: newUserObj.cuisine_id,
          city: newUserObj.city,
          state: newUserObj.state,
          address: newUserObj.address,
          zipcode: newUserObj.zipcode
        })
    .then((usersData) => {
      console.log(usersData, 'userid');
      res.header("Access-Control-Allow-Methods", "*");
      res.header("Access-Control-Allow-Origin", "*");
    })
    .then(() => {
      res.sendStatus(200);
      });
    })
  })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    })
  });






module.exports = router;
