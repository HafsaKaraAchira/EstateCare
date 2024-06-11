const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id, role, secret, expiresIn) => {
    return jwt.sign({ id, role }, secret, { expiresIn });
};

module.exports = generateToken;