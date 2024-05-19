const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    address: String,
    rentalCost: mongoose.Schema.Types.Mixed,
    propertyName: String,
    tag: String,
    contractStartDate: Date,
    contractEndDate: Date,
    directCost: mongoose.Schema.Types.Mixed,
    group: { type: String, required: true },
    city: String,
    fixedCost: Number,
    archived: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Property', PropertySchema);