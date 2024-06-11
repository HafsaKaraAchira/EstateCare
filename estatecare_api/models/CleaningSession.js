const mongoose = require('mongoose');

const CleaningSessionSchema = new mongoose.Schema({
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    cleaningStaffIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
    expectedStartTime: Date,
    expectedEndTime: Date,
    actualStartTime: Date,
    actualEndTime: Date,
    comments: String
});

module.exports = mongoose.model('CleaningSession', CleaningSessionSchema)