var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'xiaojin',
  database: 'MyHotel'
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('web/index', { title: 'Express' });
  // res.send("web").end();
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


router.post('/',function(req, res){
  if(req.xhr){
    console.log("i got you" + req.body);
  }
});

module.exports = router;
