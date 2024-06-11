const CleaningSession = require('../models/CleaningSession');

// Get all cleaning sessions
exports.getCleaningSessions = async(req, res) => {
    try {
        const sessions = await CleaningSession.find().populate('propertyId cleaningStaffIds');
        res.json(sessions);
    } catch (err) {
        res.status(500).send('Error retrieving cleaning sessions');
    }
};

// Create a cleaning session
exports.createCleaningSession = async(req, res) => {
    try {
        const newSession = new CleaningSession(req.body);
        const savedSession = await newSession.save();
        res.status(201).json(savedSession);
    } catch (err) {
        res.status(500).json({ message: 'Error creating cleaning session' });
    }
};

// Update a cleaning session by ID
exports.updateCleaningSession = async(req, res) => {
    try {
        const updatedSession = await CleaningSession.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSession) return res.status(404).json({ message: 'Cleaning session not found' });
        res.json(updatedSession);
    } catch (err) {
        res.status(500).json({ message: 'Error updating cleaning session' });
    }
};