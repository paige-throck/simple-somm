const express = require('express');
const router = express.router();
//this may need to change depending on what we do with the db file
const knex = require('../db');

//Restaurant route---------------

router.get('/:id', function(req, res) {
  const id = req.params.id;
  //knex logic goes here
  knex('restaurants')
  .where('id', id)
  .then(restaurant => {

    res.render({restaurant:restaurant})

  }).catch(function(error){
    res.sendStatus(500);
  })
});


//update ----------------------
router.put("/:id", function(req, res){
  const id = req.params.id;
  const updatedRestaurant = {
    name: req.body.name,
    city: req.body.city,
    state: req.body.state,
    address: req.body.address,
    zipcode: req.body.zipcode,
    cuisine: req.body.cuisine,
    email: req.body.email,
  };
  //knex logic
  knex('restaurants')
  .where('id', id)
  .update(updatedRestaurant)
  .then(() => {
      res.send("update your profile")
  })
})

//delete account----------------
router.delete('/:id', function(req, res){
  const id = req.params.id;
  //knex logic
  knex('restaurants')
  .where('id', id)
  .del()
  .then(() => {
    res.send('DELETED')
  })
})
