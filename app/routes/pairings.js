const express = require('express');
const router = express.Router();
//this may need to change depending on what we do with the db file
const knex = require('../db');

//get all wines for the search function----------------------
router.get('/', function(req, res){

//knex logic

});

//get a single wine------------
router.get('/:id', function(req, res){
  const id = req.params.id;
  //knex logic

})

module.exports = router;
