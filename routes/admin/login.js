var express = require('express');
var comment = require('../../libs/comment');
var router = express.Router();
const mysql = require('mysql');

var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'xiaojin',
  database: 'MyHotel'
});
/* GET home page. */
// deng lu ye
router.get('/', function(req, res, next) { 
  // console.log(req.body);
  console.log("login");
  res.render('admin/login', {});
});


router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = comment.md5(req.body.password + comment.MD5_SUFFIX);
  console.log(password);
  db.query(`SELECT * FROM admin_table WHERE username='${username}'`, function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).send('database error').end();
    } else {
      console.log(data);
      if (data.length == 0) {
        res.status(400).send('no this admin').end()
      } else if (data[0].password == password) {
        // susessful
        req.session['admin_id'] = data[0].idadmin_table;
        // res.send('yes').end();
        console.log('welcome to manegement page');
        res.redirect('/admin');
      } else {
        res.status(404).send('this password is incorrect').end();
      }
    }
  });
});
module.exports = router;
