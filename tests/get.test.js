const modules = require('../modules');
const suppertest = require('supertest');
const app = require('../controllers/routes');
require('dotenv').config();

const film = {
    title: 'El señor de los anillos: El retorno del rey',
    year: 2003,
    length: 201,
    genre: ['Adventure', 'Drama', 'Fantasy'],
    summary: 'Gandalf and Aragorn lead the World of Men against Sauron army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring',
    director: 'Peter Jackson'
};
let id = String;

describe('GET /film', function(){
    before(async function(){
        process.env.USE_TEST_DB = true;
        await modules.connectDB();
        const filmAdded = await modules.addFilm(film);
        id = filmAdded['_id'];
    });

    after(async function(){
        await modules.deleteFilm(id);
        await modules.disconnectDB();
        process.env.USE_TEST_DB = false;
    });

    it('Get film by ID', function(done){
        suppertest(app)
        .get(`/films/${id}`)
        .expect(200, done); 
    });

    it('Get films by title', function(done){
        suppertest(app)
        .get(`/films/title/${film.title}`)
        .expect(200, done); 
    });
    
    describe('Get films by year', function(){
        it('Greater than a year', function(done){
            suppertest(app)
            .get(`/films/year/gt/${film.year - 1}`)
            .expect(200, done);
        });

        it('Equal than a year', function(done){
            suppertest(app)
            .get(`/films/year/${film.year}`)
            .expect(200, done); 
        });
        
        it('Less than a year', function(done){
            suppertest(app)
            .get(`/films/year/lt/${film.year + 1}`)
            .expect(200, done);
        });
    });

    describe('Get films by length', function(){
        it('Greater than a length', function(done){
            suppertest(app)
            .get(`/films/length/gt/${film.length - 1}`)
            .expect(200, done);
        });

        it('Equal than a length', function(done){
            suppertest(app)
            .get(`/films/length/${film.length}`)
            .expect(200, done);
        });
        
        it('Less than a length', function(done){
            suppertest(app)
            .get(`/films/length/lt/${film.length + 1}`)
            .expect(200, done);
        });
    });
    
    it('Get films by genre', function(done){
        suppertest(app)
        .get(`/films/genre/${film.genre[0]}%20${film.genre[1]}%20${film.genre[2]}`)
        .expect(200, done);
    });
    
    it('Get films by director', function(done){
        suppertest(app)
        .get(`/films/director/${film.director}`)
        .expect(200, done);
    });
});