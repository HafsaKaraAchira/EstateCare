const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '7d' }, // Automatically removes the token after 7 days
});

const Token = mongoose.model('Token', TokenSchema);

module.exports = Token;