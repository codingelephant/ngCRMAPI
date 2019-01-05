var express = require('express');
var router = express.Router();

var models = require('../models');

/* GET accounts listing. */
router.get('/', async function(req, res, next) {

  let accounts = await models.Account.findAll();

  res.json({
   success: true,
   message: 'Accounts retrived successfully!',
   data: accounts,
   errors: null
  });

});

/* POST store an account. */
router.post('/', async function(req, res, next) {

   let formData = req.body;
   let newAccount = await models.Account.create(formData);

  res.json({
   success: true,
   message: 'Account created successfully!',
   data: newAccount,
   errors: null
  });

});


/* POST store an account. */
router.post('/:id/delete', async function(req, res, next) {
  let id = req.params.id;
  let ok = await models.Account.destroy({where:{id:id}});

  console.log(ok);

 res.json({
  success: true,
  message: 'Account deleted successfully!',
  errors: null
 });

});

module.exports = router;
