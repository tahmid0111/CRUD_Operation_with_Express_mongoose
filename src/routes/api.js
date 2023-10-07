const express = require('express');
const router = express.Router();

// Token Issue
const { tokenIssue } = require('../controllers/tokenIssue');
router.get('/tokenissue', tokenIssue)



// Basic CRUD Operations
const clientController = require('../controllers/createClientController');
const checkToken = require('../middleware/checkToken');

// sign up 
// username pass 

router.get('/readclient', checkToken, clientController.readtClient)
router.post('/createclient', checkToken, clientController.createClient)
router.post('/updateclient/:id', checkToken, clientController.updateClient)
router.get('/deleteclient/:id', checkToken, clientController.deleteClient)

module.exports = router;
