const express = require('express');
const router = express.Router();
const knex = require('../db');

// filterInt - The function from MDN that confirms a particular value is actually an integer. Because parseInt isn't quite strict enough.
const filterInt = function(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
};


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
