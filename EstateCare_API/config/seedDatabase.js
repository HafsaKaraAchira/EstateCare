// seedDatabase.js
const connectDB = require('./db');
const { seedProperties, seedDatabase, createUsers, createTenants, createCleaningSessions } = require('./seedData');
const Property = require('../models/Property');

const main = async() => {
    connectDB()
        .then(async() => {
            // Seed properties with additional default attributes
            await seedProperties(reset = true);

            const properties = await Property.find({});
            const propertyIds = properties.map(property => property._id); //.filter(property => property.group === 'Exited')

            // Create users, tenants, and cleaning sessions
            const users = createUsers();
            const cleaningStaffIds = users.filter(user => user.role === 'cleaning_staff').map(user => user._id);
            const tenants = createTenants(propertyIds);
            const cleaningSessions = createCleaningSessions(propertyIds, cleaningStaffIds);

            await seedDatabase({ users, tenants, cleaningSessions }, reset = true);

            process.exit();
        })
        .catch(err => {
            console.error('Failed to connect to the database', err);
            process.exit(1);
        });
};

main();