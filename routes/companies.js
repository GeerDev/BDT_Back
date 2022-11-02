const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/CompanyController')

router.get('/fillDatabase', CompanyController.dbCompanies)

module.exports = router;