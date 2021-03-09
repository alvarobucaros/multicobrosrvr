const express = require('express');
const router = express.Router();

const controllerUs = require('../controller/usuarioController');
const controllerCp = require('../controller/conceptosController');
const controllerEm = require('../controller/empresaController');
const controllerCo = require('../controller/cobrosController');

router.get('/', controllerUs.inicio);
router.post('/autentica', controllerUs.autentica);
router.post('/usuadd', controllerUs.insertUser);
router.get('/leeUsu', controllerUs.leeUsu);
router.get('/traeUsu', controllerUs.traeUsu);

router.get('/listCp',controllerCp.listConceptos);
router.post('/updateConceptos',controllerCp.updateConceptos);
router.delete('/deleteConcepto', controllerCp.deleteConcepto);
router.get('/traeConceptos', controllerCp.traeConceptos);

router.get('/leeEmpresa',controllerEm.leeEmpresa);

router.get('/leeAnticipo',controllerCo.leeAnticipo);

router.get('/leeingregasto',controllerCo.leeingregasto);

///
router.get('/leeotro',controllerCo.leeotro);
router.get('/leeotro',controllerCo.leeotro);
router.post('/updateOtros',controllerCo.updateOtros);
router.get('/deleteOtro:id', controllerCo.deleteOtro);
///
router.get('/leePrueba',controllerCp.leePrueba);
router.put('/updatePrueba',controllerCp.updatePrueba);
router.get('/deletePrueba:id', controllerCp.deletePrueba);
///


module.exports = router; 