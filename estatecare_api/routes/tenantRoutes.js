// routes/tenantRoutes.js
const express = require('express');
const router = express.Router();
const { createTenant, getAllTenants, getTenantById, updateTenant, deleteTenant } = require('../controllers/tenantController');
const auth = require('../middleware/auth');

router.post('/', auth, createTenant);
router.get('/', auth, getAllTenants);
router.get('/:id', auth, getTenantById);
router.put('/:id', auth, updateTenant);
router.delete('/:id', auth, deleteTenant);

module.exports = router;