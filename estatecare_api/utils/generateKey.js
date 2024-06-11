// Generate a secure JWT secret key
const crypto = require('crypto');
console.log(crypto.randomBytes(32).toString('hex'));
// "type": "module",