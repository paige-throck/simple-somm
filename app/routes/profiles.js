const express = require('express');
const router = express.Router();
const knex = require('../db');

// filterInt - The function from MDN that confirms a particular value is actually an integer. Because parseInt isn't quite strict enough.
const filterInt = function(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
};

//Profile route---------------

router.get('/:id' , (req, res, next) => {
  console.log("profile get request");
  let sessionID = filterInt(req.session.userID);
  let paramsID = filterInt(req.params.id);

    knex('users').where('id', paramsID)
    .then((user)=> {
      console.log(user, 'this is the user!!!!!!!');
      res.json(user);
  });
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
