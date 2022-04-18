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
    networks = networks.filter(e=>e.ssid.length>0)
    networks = networks.sort((a,b)=>(b.rssi - a.rssi))
    console.log(networks);
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
