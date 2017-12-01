var express = require('express');
var comment = require('../../libs/comment');
var router = express.Router();

/* GET home page. */
// pan duan shi fo denglu
router.use(function(req, res, next) {
  if (!req.session['admin_id'] && req.url != '/login') {
    // console.log(req.url + "!!!!!!");
    res.redirect('/admin/login');
  } else {
    next();
  }
});
router.get('/', function(req, res, next) {
  res.render('admin/management.ejs', {});
});

// banner_table
var banner = require('./banner.js');
router.use('/banner',banner);

// login
var login = require('./login.js');
router.use('/login',login);
// single
var single = require('./single.js');
router.use('/single', single);

router.get('/gallery',function(req, res, next){
  res.render('admin/gallery',{})
})

module.exports = router;
