const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/CompanyController')

router.get('/fillDatabase', CompanyController.dbCompanies)
router.get('/sortBySize', CompanyController.sortBySize)

module.exports = router;