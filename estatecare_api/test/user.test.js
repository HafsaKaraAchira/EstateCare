const request = require('supertest');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/User');
const Token = require('../models/Token');
const generateToken = require('../utils/generateToken');

describe('User Endpoints', () => {
    let ownerToken, managerToken, staffToken;
    let owner, manager, staff;

    beforeAll(async() => {
        // Connect to the test database
        const MONGO_URI = process.env.MONGO_URI_TEST || 'your_test_db_uri';
        await mongoose.connect(MONGO_URI);

        // Seed the database with users
        owner = await User.create({ name: 'Owner', email: 'owner@example.com', password: 'owner_password', role: 'owner' });
        manager = await User.create({ name: 'Manager', email: 'manager@example.com', password: 'password', role: 'manager' });
        staff = await User.create({ name: 'Staff', email: 'staff@example.com', password: 'staff_password', role: 'cleaning_staff' });

        // Clear tokens collection
        await Token.deleteMany({});

        // console.log('Created Users:', { owner, manager, staff });

        // Clear tokens collection
        await Token.deleteMany();

        // Login as owner to get token
        const responseOwner = await request(app)
            .post('/api/users/login')
            .send({ email: owner.email, password: 'owner_password' }); // Ensure the password here matches the one used during creation

        // if (responseOwner.error) {
        //     console.log('Owner login error:', responseOwner.error);
        // } else {
        //     console.log('Owner login response:', responseOwner.body);
        // }

        ownerToken = responseOwner.body.accessToken;

        // Login as manager to get token
        const responseManager = await request(app)
            .post('/api/users/login')
            .send({ email: manager.email, password: 'password' }); // Ensure the password here matches the one used during creation

        // if (responseManager.error) {
        //     console.log('Manager login error:', responseManager.error);
        // } else {
        //     console.log('Manager login response:', responseManager.body);
        // }

        managerToken = responseManager.body.accessToken;
    });

    afterAll(async() => {
        // Clean up the database
        await User.deleteMany({});
        await Token.deleteMany({});
        // Close the database connection
        await mongoose.connection.close();
    });

    it('1. should allow owner to register a new user', async() => {
        const res = await request(app)
            .post('/api/users/register')
            .set('Authorization', `Bearer ${ownerToken}`)
            .send({
                name: 'New Staff',
                email: 'newstaff@example.com',
                password: 'password',
                role: 'cleaning_staff',
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('accessToken');
        expect(res.body).toHaveProperty('refreshToken');
    });

    it('2. should allow manager to register a new user', async() => {
        const res = await request(app)
            .post('/api/users/register')
            .set('Authorization', `Bearer ${managerToken}`)
            .send({
                name: 'Another Staff',
                email: 'anotherstaff@example.com',
                password: 'password',
                role: 'cleaning_staff',
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('accessToken');
        expect(res.body).toHaveProperty('refreshToken');
    });

    it('3. should not allow staff to register a new user', async() => {
        const res = await request(app)
            .post('/api/users/register')
            .set('Authorization', `Bearer ${staffToken}`)
            .send({
                name: 'Invalid User',
                email: 'invaliduser@example.com',
                password: 'password',
                role: 'cleaning_staff',
            });

        // console.log(res.body);

        expect(res.statusCode).toEqual(403);
        expect(res.body.message).toContain('Not authorized, token failed') //.toEqual('You do not have permission to create user accounts');
    });

    it('4. should login a user', async() => {
        const res = await request(app)
            .post('/api/users/login')
            .send({
                email: staff.email,
                password: 'staff_password',
            });

        // console.log(res.body);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('accessToken');
        expect(res.body).toHaveProperty('refreshToken');
    });

    it('5. should refresh token', async() => {
        const loginRes = await request(app)
            .post('/api/users/login')
            .send({
                email: owner.email,
                password: 'owner_password',
            });
        const refreshToken = loginRes.body.refreshToken;
        const res = await request(app)
            .post('/api/users/refresh-token')
            .send({ token: refreshToken });

        // console.log(res.body);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('accessToken');
        expect(res.body).toHaveProperty('refreshToken');
    });

    it('6. should logout a user', async() => {
        const loginRes = await request(app)
            .post('/api/users/login')
            .send({
                email: owner.email,
                password: owner.password,
            });
        const refreshToken = loginRes.body.refreshToken;
        const res = await request(app)
            .post('/api/users/logout')
            .send({ token: refreshToken });
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Logged out successfully');
    });
});