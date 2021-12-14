var express = require('express');
const indexController = require('../controllers/indexController');
const UserController = require('../controllers/UserController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.showHome);
router.get('/home', indexController.showHome);

router.get('/usuarios', UserController.index);
router.get('/usuarios/ver/:id', UserController.findById);
router.get('/search', UserController.search);
router.get('/cadastro', UserController.create);
router.post('/cadastro', UserController.store);

module.exports = router;
