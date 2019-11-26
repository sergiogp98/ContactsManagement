const app = require('../controllers/routes');
const moongose = require('mongoose');
const supertest = require('supertest');
const modules = require('../modules');
const request = supertest(app);
const { MongoMemoryServer } = require('mongodb-memory-server');
    
let mongoUri = new String;
const mongoServer = new MongoMemoryServer();

const  film = {
    title: 'Pulp Fiction',
    year: 1994,
    length: 154,
    genre: ['Crime', 'Drama'],
    summary: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    director: 'Quentin Tarantino'
};
const modifiedFilm = {
    title: 'Batman',
    year: 2020,
    length: 150,
    genre: 'Science fiction',
    summary: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    director: 'Robert de Niro'
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
        //await moongose.connection.close();
        await modules.disconnectDB();
        await mongoServer.stop();
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
});

describe('PUT /film', function(){
    it('Modify film', async done => {
        const filmAdded = await modules.addFilm(film);
        const id = filmAdded['_id'];
        const response = await request.put(`/films/${id}`).send(modifiedFilm);
        expect(response.status).toBe(200);
        done();
    });
});