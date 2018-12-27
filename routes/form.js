var express = require('express');
var router = express.Router();
//connecting your data model to routes
const db = require('../models');


/* GET form page. */
router.get('/', function(req, res, next) {
  res.render('form', {title: "Express"});
  console.log("router formjs");
});




// print user informaiton
router.get('/info', (req,res)=>{
   db.Form.find()
  .then((form)=> res.json(form))
  .catch((err)=> res.json(err))
})


// create - to create a new form - use mongoose method create 
router.post('/',(req,res)=>{
  db.Form.create(req.body)
  .then(res.redirect('/form/info'))
  .catch((err)=> res.json(err))
})



module.exports = router;
