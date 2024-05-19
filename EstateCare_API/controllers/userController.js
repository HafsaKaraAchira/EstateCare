const User = require('../models/User');

// Register user
exports.registerUser = async(req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ message: 'Error registering user' });
    }
};

// Get all users
exports.getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('Error retrieving users');
    }
};