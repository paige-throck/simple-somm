const express = require('express');
const router = express.Router();
const knex = require('../db');

//Restaurant route---------------

router.get('/:id', function(req, res) {
  const id = req.params.id;
  //knex logic goes here
  knex('users')
  .where('id', id)
  .then(user => {

    res.render({user:user})

  }).catch(function(error){
    res.sendStatus(500);
  })
});


//update ----------------------
router.put("/:id", function(req, res){
  const id = req.params.id;
  const updatedUser = {
    name: req.body.name,
    city: req.body.city,
    state: req.body.state,
    address: req.body.address,
    zipcode: req.body.zipcode,
    cuisine: req.body.cuisine,
    email: req.body.email,
  };
  //knex logic
  knex('users')
  .where('id', id)
  .update(updatedUser)
  .then(() => {
      res.send("update your profile")
  })
})

//delete account----------------
router.delete('/:id', function(req, res){
  const id = req.params.id;
  //knex logic
  knex('users')
  .where('id', id)
  .del()
  .then(() => {
    res.send('DELETED')
  })
})
module.exports = router;
