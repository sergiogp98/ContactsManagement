const app = require('../controllers/routes');
const moongose = require('mongoose');
const supertest = require('supertest');
const request = supertest(app);
require('dotenv').config();


describe('POST /film', () => {
    const film = {
        title: 'Joker',
        year: 2019,
        length: 122,
        genre: ['Crime', 'Drama', 'Thriller'],
        summary: 'In Gotham City, mentally-troubled comedian Arthur Fleck embarks on a downward-spiral of social revolution and bloody crime. This path brings him face-to-face with his infamous alter-ego: "The Joker"',
        director: 'Todd Phillips'
    };

    beforeAll(async () => {
        try{
            const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustersergio-czq9b.mongodb.net/${process.env.TEST_DB_NAME}?retryWrites=true&w=majority`
            await moongose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        } catch(err) {
            console.log(err);
            process.exit(1);
        }
    });

    afterAll(async () => {
        const collections = Object.keys(moongose.connection.collections);
        for (const collectionName of collections) {
            const collection = moongose.connection.collections[collectionName];
            await collection.deleteMany();
        }
    })

    it('Add a film', async done => {
        const response = await request.post('/films').send(film);
        expect(response.status).toBe(201);
        done();         
    });
});

