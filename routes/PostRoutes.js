
const {create} = require('../controllers/InfoControllers');
const express=require('express');
const router=express.Router();

  //# create a note
  router.post('/createpost', create);


  
 

  
  module.exports = router;