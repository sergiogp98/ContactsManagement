const app = require('../controllers/routes');
const moongose = require('mongoose');
const supertest = require('supertest');
const modules = require('../modules');
const request = supertest(app);
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoUri = new String;
const mongoServer = new MongoMemoryServer();

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
        mongoUri = await mongoServer.getConnectionString();
        await modules.connectDB(mongoUri);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
});

afterAll(async () => {
    try{
        await moongose.connection.close();
        await mongoServer.stop();
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
});

describe('POST /film', function() {
    it('Add a film', async done => {
        const response = await request.post('/films').send(film);
        expect(response.status).toBe(201);
        done();         
    });
});

