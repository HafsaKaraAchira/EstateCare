const express = require('express');
const router = express.Router();
const cleaningSessionController = require('../controllers/cleaningSessionController');
const auth = require('../middleware/auth');

router.get('/', auth, cleaningSessionController.getCleaningSessions);
router.post('/', auth, cleaningSessionController.createCleaningSession);
router.put('/:id', auth, cleaningSessionController.updateCleaningSession);

module.exports = router;