// seedData.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Property = require('../models/Property');
const User = require('../models/User');
const CleaningSession = require('../models/CleaningSession');
const Tenant = require('../models/Tenant');
const properties = require('./properties.json');

// generate an id
const generateId = () => new mongoose.Types.ObjectId();

// seed the properties collection from the json file
const seedProperties = async(reset = false) => {
    // const propertiesWithDefaults = properties.map(property => ({
    //     ...property,
    //     archived: false,
    //     // createdAt: new Date(),
    //     // updatedAt: new Date(),
    // }));

    try {
        if (reset) await Property.deleteMany({});
        await Property.insertMany(properties);
        console.log('Database collection * Property * seeded successfully ');

    } catch (error) {
        console.error(error);
    }
};

const seedDatabase = async({ users, tenants, cleaningSessions }, reset = false) => {
    try {
        if (reset) {
            await User.deleteMany({});
            await Tenant.deleteMany({});
            await CleaningSession.deleteMany({});
        }

        await User.insertMany(users);
        await Tenant.insertMany(tenants);
        await CleaningSession.insertMany(cleaningSessions);

        console.log('Database seeded successfully');
    } catch (error) {
        console.error(error);
    }
};

// 
const createUsers = () => {
    const ownerId = generateId();
    const managerIds = Array.from({ length: 2 }, generateId);
    const cleaningStaffIds = Array.from({ length: 5 }, generateId);

    const users = [{
            _id: ownerId,
            name: 'John Doe',
            email: 'owner@example.com',
            password: bcrypt.hashSync('password', 10),
            role: 'owner',
        },
        ...managerIds.map((id, index) => ({
            _id: id,
            name: `Manager ${index + 1}`,
            email: `manager${index + 1}@example.com`,
            password: bcrypt.hashSync('password', 10),
            role: 'manager',
        })),
        ...cleaningStaffIds.map((id, index) => ({
            _id: id,
            name: `Cleaner ${index + 1}`,
            email: `cleaner${index + 1}@example.com`,
            password: bcrypt.hashSync('password', 10),
            role: 'cleaning_staff',
        })),
    ];

    return users;
};

//
const createTenants = (propertyIds) => {
    return Array.from({ length: 12 }, (_, index) => ({
        _id: generateId(),
        name: `Tenant ${index + 1}`,
        email: `tenant${index + 1}@example.com`,
        phone: `123456789${index}`,
        propertyId: propertyIds[index % propertyIds.length],
        leaseStartDate: new Date(),
        leaseEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    }));
};

// get a random date within an intervalle of time defined as [ start , end ]
const getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// get a random cleaning staff shuffled ids portions
const getRandomCleaningStaff = (cleaningStaffIds, portion) => {
    const shuffled = cleaningStaffIds.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, portion);
};

// create the cleaning Sessions objects
const createCleaningSessions = (propertyIds, cleaningStaffIds) => {
    const now = new Date();
    const twoMonthsBefore = new Date(now.setMonth(now.getMonth() - 2));
    const oneMonthAfter = new Date(now.setMonth(now.getMonth() + 3));

    return Array.from({ length: 14 }, (_, index) => {
        const expectedStartTime = getRandomDate(twoMonthsBefore, oneMonthAfter);
        expectedStartTime.setHours(9);
        const expectedEndTime = new Date(expectedStartTime);
        expectedEndTime.setHours(expectedStartTime.getHours() + Math.floor(Math.random() * 4) + 6);

        return {
            _id: generateId(),
            propertyId: propertyIds[index % propertyIds.length],
            cleaningStaffIds: getRandomCleaningStaff(cleaningStaffIds, 2),
            expectedStartTime,
            expectedEndTime,
            actualStartTime: null,
            actualEndTime: null,
            comments: "",
        };
    });
};

module.exports = {
    seedProperties,
    seedDatabase,
    createUsers,
    createTenants,
    createCleaningSessions,
};