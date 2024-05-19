const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const auth = require('../middleware/auth');

router.get('/', auth, propertyController.getProperties);
router.get('/:id', auth, propertyController.getPropertyById);
router.post('/', auth, propertyController.createProperty);
router.put('/:id', auth, propertyController.updateProperty);
router.put('/archive/:id', auth, propertyController.archiveProperty);

module.exports = router;