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
  
  res.render('admin/single',{});
})

router.post('/',function(req,res,nex){

})

module.exports = router;
