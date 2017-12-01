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
  switch (req.query.act) {
     case 'mod': db.query(`SELECT * FROM banner_table WHERE id=${req.query.id}`, function(err, data){
       if (err) {
         console.error(err);
       } else if (data.length == 0){
         console.log('404 data not Found');
       }else{
         db.query(`SELECT * FROM banner_table`, function(err, banner){
           if (err) {
             console.log('500 database error');
           } else if(banner.length == 0){
             console.log('404 this data not found');
           }else{
             res.render('admin/banner',{banner,mod_data:data[0]});
             console.log(data);
           }
         })
       }
     });

    break;
    case 'del': db.query(`DELETE FROM banner_table WHERE id=${req.query.id}`, function(err, data) {
      if (err) {
        console.log('error' + req.query.id);
        // console.log(err);
        res.status(500).send('database Error').end();
      } else {
        res.redirect('/admin/banner');
      }
    });
    break;
    default: db.query(`SELECT * FROM banner_table`, function(err, banner) {
      if (err) {
        res.status(500).send('database error').end();
        console.error(err);
      } else {
        console.log('ryuewy');
        res.render('admin/banner.ejs', {banner});
      }
    });
    break;
  }
});


router.post('/', function(req, res, next) {

  var title = req.body.title;
  var description = req.body.description;
  var herf = req.body.herf;
  if (!title || !description || !herf) {
    res.status(400).send('arg error').end();
  } else {
    if (req.body.mod_id) {
      db.query(`UPDATE banner_table SET \
        title='${req.body.title}',\
        description='${req.body.description}',\
        herf='${req.body.herf}'\
        WHERE id=${req.body.mod_id}`,function(err,data){
          if (err) {
            console.error(err);
            console.log('err 500 database error');
          } else {
            console.log('xiugai finishide');
            res.redirect('banner');
          }
        });
    } else { //add
      db.query(`INSERT INTO banner_table (title, description, herf) VALUE('${title}', '${description}', '${herf}')`, function(err, data) {
        if (err) {
          req.send(500).send('database error').end();
        } else {
          console.log('insert in it');
          res.redirect('/admin/banner');
        }
      });

    }
  }
});

module.exports = router;
