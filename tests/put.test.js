const modules = require('../modules');
const suppertest = require('supertest');
const app = require('../controllers/routes');
const moongose = require('mongoose');
require('dotenv').config();

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
let id = String;

describe('PUT /film', async function(){
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

    it('Modify film', function(done){
        suppertest(app)
        .put(`/films/${id}`)
        .send(modifiedFilm)
        .expect(200, done);
    });
});