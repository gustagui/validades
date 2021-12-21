var express = require('express');
const indexController = require('../controllers/indexController');
const UserController = require('../controllers/UserController');
const PromoterController = require('../controllers/PromoterController');
const DataController = require('../controllers/DataController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.showHome);
router.get('/home', indexController.showHome);

router.get('/usuarios', UserController.index);
router.get('/usuarios/ver/:id', UserController.findById);

router.get('/usuarios/search', UserController.search);

router.get('/cadastro', UserController.create);
router.post('/cadastro', UserController.store);

router.get('/usuarios/editar/:id', UserController.edit);
router.put('/usuarios/editar/:id', UserController.update);

router.delete('/usuarios/deletar/:id', UserController.destroy);



// Promoter
router.get('/promotores', PromoterController.index);
router.get('/promotores/ver/:id', PromoterController.findById);

router.get('/addPromotores', PromoterController.create);
router.post('/addPromotores', PromoterController.store);




// Validades
router.get('/validades', DataController.index);
router.get('/validades/ver/:id', DataController.findById);

router.get('/addData', DataController.create);
router.post('/addData', DataController.store);

router.get('/validades/editar/:id', DataController.edit);
router.put('/validades/editar/:id', DataController.update);

router.delete('/validades/deletar/:id', DataController.destroy);



module.exports = router;
