const modules = require('../modules');
const suppertest = require('supertest');
const app = require('../controllers/routes');
const moongose = require('mongoose');
require('dotenv').config();

const film = {
    title: 'El caballero oscuro',
    year: 2008,
    length: 152,
    genre: ['Crime', 'Drama', 'Action'],
    summary: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan'
};
let id = String;
let filmAdded = moongose.Query;

describe('DELETE /film', function(){
    before(async function() {
        process.env.USE_TEST_DB = true;
        //await modules.connectDB();
    });

    beforeEach(async function() {     
        filmAdded = await modules.addFilm(film);
    });

    after(async function() {
        await modules.deleteFilm(id);
        await modules.disconnectDB();
        process.env.USE_TEST_DB = false;
    });
    
    it('Delete film by ID', function(done){
        id = filmAdded['_id'];
        suppertest(app)
        .delete(`/films/${id}`)
        .expect(200, done);
    });

    it('Delete films by title', function(done){
        suppertest(app)
        .delete(`/films/title/${film.title}`)
        .expect(200, done);
    });
    
    describe('Delete films by year', function(){
        it('Greater than a year',  function(done){
            suppertest(app)
            .delete(`/films/year/gt/${film.year - 1}`)
            .expect(200, done);
        });

        it('Equal than a year', function(done){
            suppertest(app)
            .delete(`/films/year/${film.year}`)
            .expect(200, done);
        });
        
        it('Less than a year', function(done){
            suppertest(app)
            .delete(`/films/year/lt/${film.year + 1}`)
            .expect(200, done);
        });
    });
    
    describe('Delete films by length', function(){
        it('Greater than a length', function(done){
            suppertest(app)
            .delete(`/films/length/gt/${film.length - 1}`)
            .expect(200, done);
        });

        it('Equal than a length', function(done){
            suppertest(app)
            .delete(`/films/length/${film.length}`)
            .expect(200, done);
        });
        
        it('Less than a length', function(done){
            suppertest(app)
            .delete(`/films/length/lt/${film.length + 1}`)
            .expect(200, done);
        });
    });

    it('Delete films by genre', function(done){
        suppertest(app)
        .delete(`/films/genre/${film.genre[0]}%20${film.genre[1]}%20${film.genre[2]}`)
        .expect(200, done);
    });
    
    it('Delete films by director', function(done){
        suppertest(app)
        .delete(`/films/director/${film.director}`)
        .expect(200, done);
    });
});