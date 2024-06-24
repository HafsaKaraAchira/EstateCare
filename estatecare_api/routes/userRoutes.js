const express = require('express');
const router = express.Router();
const { protect, roleAuth } = require('../middleware/auth');
const { register, login, refreshToken, logout, validateToken } = require('../controllers/userController');


// User registration
router.post('/register', protect, roleAuth(['owner', 'manager']), register);
// roleAuth(['owner', 'manager'])

// User login
router.post('/login', login);

// Refresh token
router.post('/refresh-token', refreshToken);

// User logout
router.post('/logout', logout);

// Validate token endpoint
router.get('/validate-token', protect, validateToken);


module.exports = router;