const express = require('express');
const router = express.Router();
//this may need to change depending on what we do with the db file
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
knex('wines')
.then((wines) => {
res.header("Access-Control-Allow-Origin", "*");
  res.json(wines);
  }).catch(function (error) {
      console.log(error);
      res.sendStatus(500);
    });
});

//get a single wine------------
router.get('/:id', function(req, res){
  const id = req.params.id;
  //knex logic
  knex('wines')
  .where('id', id)
  .then((wine) => {
    res.json({wine:wine})
  }).catch(function (error) {
      console.log(error);
      res.sendStatus(500);
    });
})

module.exports = router;
