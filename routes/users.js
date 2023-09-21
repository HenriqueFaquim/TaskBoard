var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('var:', process.env.APP_NAME);
  res.send('process.env.TEST' + process.env.APP_NAME);
});

module.exports = router;
