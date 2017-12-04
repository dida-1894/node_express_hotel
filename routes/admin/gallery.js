var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'xiaojin',
  database: 'MyHotel'
});


router.get('/',function(req, res, next){
  res.render('admin/gallery',{});

})

router.post('/',function(req,res,next){
  if (req.xhr || req.accpet('json,html') == 'json') {
    alert('i got it from test and i am gallery');
    console.log(req.body);
  } else {
    alert('i got nothing');
  }
});

module.exports = router;
