const express = require('express');
const router = express.Router();

// const { homepage } = require('../controllers/homepageController');
const clientController = require('../controllers/createClientController');
router.get('/', clientController.homepage)


router.post('/createclient', clientController.createClient)

module.exports = router;
