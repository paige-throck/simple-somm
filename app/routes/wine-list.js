const express = require('express');
const router = express.router();
//this may need to change depending on what we do with the db file
const knex = require('../db');


//get all wine lists if we choose to have multiple
router.get('/', function(req, res){

  //knex logic
  res.send('all wine lists')
})

//get single wine list----------
router.get('/:id', function(req, res){
const id = req.params.id

  //knex logic
  res.send('single wine list')
})

//----------------------------------------------------------------
//the next routes depend on what direction we go in. Do we have one customizable wine list and offer suggestions or do we allow users to create multiple lists?
//----------------------------------------------------------------
