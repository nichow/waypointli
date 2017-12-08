var express = require('express');
var router = express.Router();

/* GET about listing. */
router.get('/', function(req, res, next) {
  res.render('about', { title: "Waypoint Gaming - About Us" });
});

module.exports = router;