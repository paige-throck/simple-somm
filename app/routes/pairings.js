const express = require('express');
const router = express.Router();
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
