const jwt = require('jsonwebtoken');
const User = require('../models/User');


const protect = async(req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(403).json({
                message: `Not authorized, token failed : ${error}`
            });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

const roleAuth = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden, insufficient permissions' });
    }
    next();
};


module.exports = { protect, roleAuth };



// const auth = (req, res, next) => {
//     const token = req.header('Authorization');
//     if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded.user;
//         next();
//     } catch (err) {
//         res.status(401).json({ message: 'Token is not valid' });
//     }
// };

// const admin = (req, res, next) => {
//     if (req.user && req.user.role === 'admin') {
//         next();
//     } else {
//         res.status(401).json({ message: 'Not authorized as an admin' });
//     }
// };