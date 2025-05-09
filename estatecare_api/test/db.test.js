const mongoose = require('mongoose');
const connectDB = require('../config/db');

describe('Database Connection', () => {
    beforeAll(async() => {
        await connectDB();
    });

    afterAll(async() => {
        await mongoose.connection.close();
    });

    it('should connect to the database successfully', async() => {
        const state = mongoose.connection.readyState;
        expect(state).toEqual(1); // 1 means connected
    });
});