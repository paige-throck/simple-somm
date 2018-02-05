const express = require('express');
const router = express.router();
//this may need to change depending on what we do with the db file
const knex = require('../db');

//get all wines for the search function----------------------
router.get('/', function(req, res){

//knex logic
knex('wines')
.then((wines) => {
  res.send('all the wines',
{wines:wines});
  });
});

//get a single wine------------
router.get('/:id', function(req, res){
  const id = req.params.id;
  //knex logic
  knex('wines')
  .where('id', id)
  .then((wine) => {
    res.send('single wine', {wine:wine})
  })
})
