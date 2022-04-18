var express = require('express');
var router = express.Router();
const scanner = require('node-wifi-scanner');


/* GET home page. */
router.get('/', function(req, res, next) {

  scanner.scan((err, networks) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(networks);
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
