const mongoose = require('mongoose');
const movieModel = require('../app/api/models/movies');
const movieData = { name: 'Beyond the enemy lines', year: '2001', director: 'Jon Moore' };

//using mongo atlas to create cloud db
describe('User Model Test', () => {
    beforeAll(async () => {
        await mongoose.connect('mongodb+srv://prashsin:bmcAdm1n@cluster0.txo5n.mongodb.net/jest?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save movie successfully', async () => {
        const validMovie = new movieModel(movieData);
        const savedMovie = await validMovie.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedMovie._id).toBeDefined();
        expect(savedMovie.name).toBe(movieData.name);
        expect(savedMovie.year).toBe(movieData.year);
        expect(savedMovie.director).toBe(movieData.director);
    });

    //clean up db after test cases
    afterAll(async () => {
        await mongoose.connection.dropCollection('movies')
        await mongoose.connection.close()
    })
})