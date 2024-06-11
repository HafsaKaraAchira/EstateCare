const Property = require('../models/Property');

// Get all properties
exports.getProperties = async(req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.status(500).send('Error retrieving properties');
    }
};

// Get property by ID
exports.getPropertyById = async(req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) return res.status(404).json({ message: 'Property not found' });
        res.json(property);
    } catch (err) {
        res.status(500).send('Error retrieving property');
    }
};

// Create a new property
exports.createProperty = async(req, res) => {
    try {
        const newProperty = new Property(req.body);
        const savedProperty = await newProperty.save();
        res.status(201).json(savedProperty);
    } catch (err) {
        res.status(500).json({ message: 'Error creating property' });
    }
};

// Update property by ID
exports.updateProperty = async(req, res) => {
    try {
        const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProperty) return res.status(404).json({ message: 'Property not found' });
        res.json(updatedProperty);
    } catch (err) {
        res.status(500).json({ message: 'Error updating property' });
    }
};

// Archive property by ID
exports.archiveProperty = async(req, res) => {
    try {
        const archivedProperty = await Property.findByIdAndUpdate(req.params.id, { archived: true }, { new: true });
        if (!archivedProperty) return res.status(404).json({ message: 'Property not found' });
        res.json(archivedProperty);
    } catch (err) {
        res.status(500).json({ message: 'Error archiving property' });
    }
};