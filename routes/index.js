var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.showHome);
router.get('/home', indexController.showHome);

module.exports = router;
