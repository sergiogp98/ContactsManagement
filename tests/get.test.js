const app = require('../controllers/routes');
const moongose = require('mongoose');
const supertest = require('supertest');
const modules = require('../modules');
const request = supertest(app);
const { MongoMemoryServer } = require('mongodb-memory-server');
    
let mongoUri = new String;
const mongoServer = new MongoMemoryServer();
let filmAdded = moongose.Query;

const film = {
    title: 'El señor de los anillos: El retorno del rey',
    year: 2003,
    length: 201,
    genre: ['Adventure', 'Drama', 'Fantasy'],
    summary: 'Gandalf and Aragorn lead the World of Men against Sauron army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring',
    director: 'Peter Jackson'
};

beforeAll(async () => {
    try{
        mongoUri = await mongoServer.getConnectionString();
        await modules.connectDB(mongoUri);
        filmAdded = await modules.addFilm(film);
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

describe('GET /film', function() {
    it('Get film by ID', async done => {
        const id = filmAdded['_id']; 
        const response = await request.get(`/films/${id}`);
        expect(response.status).toBe(200);
        done();
    });
    
    it('Get films by title', async done => {
        const response = await request.get(`/films/title/${film.title}`);
        expect(response.status).toBe(200);
        done(); 
    });
    
    describe('Get films by year', function() {
        it('Greater than a year', async done => {
            const response = await request.get(`/films/year/gt/${film.year - 1}`);
            expect(response.status).toBe(200);
            done();
        });

        it('Equal than a year', async done => {
            const response = await request.get(`/films/year/${film.year}`);
            expect(response.status).toBe(200);
            done();
        });
        
        it('Less than a year', async done => {
            const response = await request.get(`/films/year/lt/${film.year + 1}`);
            expect(response.status).toBe(200);
            done();
        });
    });

    describe('Get films by length', function() {
        it('Greater than a length', async done => {
            const response = await request.get(`/films/length/gt/${film.length - 1}`);
            expect(response.status).toBe(200);
            done();
        });

        it('Equal than a length', async done => {
            const response = await request.get(`/films/length/${film.length}`);
            expect(response.status).toBe(200);
            done();
        });
        
        it('Less than a length', async done => {
            const response = await request.get(`/films/length/lt/${film.length + 1}`);
            expect(response.status).toBe(200);
            done();
        });
    });
    
    it('Get films by genre', async done => {
        const response = await request.get(`/films/genre/${film.genre[0]}%20${film.genre[1]}%20${film.genre[2]}`);
        expect(response.status).toBe(200);
        done();
    });
    
    it('Get films by director', async done => {
        const response = await request.get(`/films/director/${film.director}`);
        expect(response.status).toBe(200);
        done();
    });
});