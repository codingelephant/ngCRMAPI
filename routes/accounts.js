var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
var models = require('../models');

/* GET accounts listing. */
router.get('/', async function(req, res, next) {

  var q    = req.query.q ? req.query.q : null;
  var date_from = req.query.date_from ? req.query.date_from : null;
  var date_to   = req.query.date_to ? req.query.date_to : null;
  var conditions = {
    where:{},
    order: [
      ['createdAt', 'DESC'],
      ]
    };
    //if keyword search present
    if(q){
      conditions.where.name = { [Op.like]: '%'+q+'%' };
    }
    //if date filter present 
    


  let accounts = await models.Account.findAll(conditions);

  //fake delay to see loading 
  setTimeout(()=>{

    res.json({
      success: true,
      message: 'Accounts retrived successfully!',
      data: accounts,
      errors: null
     });

  }, 3000);

  

});


/* GET account details. */
router.get('/:id', async function(req, res, next) {
  let id = req.params.id;
  let account = await models.Account.findOne({where:{id:id}});

  res.json({
   success: true,
   message: 'Account retrived successfully!',
   data: account,
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



/* PUT store an account. */
router.put('/:id/update', async function(req, res, next) {
  let id = req.params.id;
  let formData = req.body;
  let updatedAccount = await models.Account.update(formData, {where:{id:id}});

 res.json({
  success: true,
  message: 'Account updated successfully!',
  data: updatedAccount,
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
