const express = require('express');
const router = express.Router();

// Basic CRUD Operations
const clientController = require('../controllers/createClientController');
router.get('/readclient', clientController.readtClient)
router.post('/createclient', clientController.createClient)
router.post('/updateclient/:id', clientController.updateClient)
router.get('/deleteclient/:id', clientController.deleteClient)

// Token Issue
const { tokenIssue } = require('../controllers/tokenIssue');
router.post('/tokenissue', tokenIssue)

module.exports = router;
