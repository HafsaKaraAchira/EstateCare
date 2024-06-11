const User = require('../models/User');
const Token = require('../models/Token');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');
const generateId = require('../utils/generateId');

// Register new user
exports.register = async(req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const userId = generateId();

        const user = await User.create({ userId, name, email, password, role });

        const accessToken = generateToken(user._id, user.role, process.env.JWT_SECRET, '5m');
        const refreshToken = generateToken(user._id, user.role, process.env.JWT_REFRESH_SECRET, '7d');

        await Token.create({ userId: user._id, token: refreshToken });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            accessToken,
            refreshToken,
        });
    } catch (error) {
        res.status(500).json({
            message: `Registration Server error : ${error}`
        });
    }
};

// Login user endpoint
exports.login = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const accessToken = generateToken(user._id, user.role, process.env.JWT_SECRET, '15m');
        const refreshToken = generateToken(user._id, user.role, process.env.JWT_REFRESH_SECRET, '7d');

        await Token.create({ userId: user._id, token: refreshToken });

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            accessToken,
            refreshToken,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Logout user
exports.logout = async(req, res) => {
    const { token } = req.body;

    try {
        await Token.findOneAndDelete({ token });
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Refresh the access token token
exports.refreshToken = async(req, res) => {
    const { token: refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token error : No token provided' });
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const user = await User.findById(decoded.id);
        const storedToken = await Token.findOne({ userId: decoded.id, token: refreshToken });

        if (!user || !storedToken) {
            return res.status(401).json({ message: 'Invalid refresh token' });
        }

        const newAccessToken = generateToken(user._id, user.role, process.env.JWT_SECRET, '15m');

        // // ** if you want to regenrate a new refresh token
        const newRefreshToken = generateToken(user._id, user.role, process.env.JWT_REFRESH_SECRET, '7d');

        // update the refresh token in the database
        storedToken.token = newRefreshToken;
        await storedToken.save();

        res.json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken, //refreshToken, //newRefreshToken,
        });

    } catch (error) {
        res.status(401).json({
            message: `Invalid refresh token : ${error}`
        });
    }
};