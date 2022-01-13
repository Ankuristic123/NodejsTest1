const express = require('express');
const {
  downloadExcel,
  allExcel,
  searchExcel
} = require('../controllers/mongodb-excel')
const { auth, authGetInvoice } = require('../middleware/auth');
const router = express.Router();

router.post('/excel/downloadExcel', auth, downloadExcel);
router.get('/excel/all', auth, allExcel);
router.get('/excel/search/:id', auth, searchExcel);

module.exports = router;