var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Av8d' });
  res.redirect('/catalog');
});

module.exports = router;
