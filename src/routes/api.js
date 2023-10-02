const express = require('express');
const router = express.Router();

// const { homepage } = require('../controllers/homepageController');
const clientController = require('../controllers/createClientController');
router.get('/', clientController.homepage)

router.get('/readclient', clientController.readtClient)


router.post('/createclient', clientController.createClient)

router.post('/updateclient/:id', clientController.updateClient)

router.get('/deleteclient/:id', clientController.deleteClient)

module.exports = router;
