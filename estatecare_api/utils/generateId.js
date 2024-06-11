const crypto = require('crypto');

const generateId = () => {
    return crypto.randomBytes(16).toString('hex');
};

module.exports = generateId;