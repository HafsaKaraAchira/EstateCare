const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3033;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/properties', require('./routes/propertyRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/cleaningSessions', require('./routes/cleaningSessionRoutes'));
app.use('/api/tenants', require('./routes/tenantRoutes')); // Add this line

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});