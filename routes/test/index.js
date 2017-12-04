var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'xiaojin',
  database: 'MyHotel'
});

router.get('/',function(req, res){
  res.render('test/test',{});
});

router.post('/',function(req, res){
  if(req.xhr){
    console.log("i got something from tests");
    console.log(req.body);
  }
});

module.exports = router;
