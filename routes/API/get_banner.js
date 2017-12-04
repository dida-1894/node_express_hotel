var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'xiaojin',
  database: 'MyHotel'
});



router.get('/get_banner', function(req, res){
  db.query(`SELECT * FROM banner_table`,function(err, data){
    if (err) {
      console.error(err);
      console.log('500 database error');
    } else {
      // console.log(data);
      res.send(data).end();
    }
  });
});

module.exports = router;
