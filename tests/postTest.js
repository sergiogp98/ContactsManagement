const modules = require('../modules');
const supertest = require('supertest');
const app = require('../controllers/routes');
const moongose = require('mongoose');
require('dotenv').config();

const film = {
    title: 'Joker',
    year: 2019,
    length: 122,
    genre: ['Crime', 'Drama', 'Thriller'],
    summary: 'In Gotham City, mentally-troubled comedian Arthur Fleck embarks on a downward-spiral of social revolution and bloody crime. This path brings him face-to-face with his infamous alter-ego: "The Joker"',
    director: 'Todd Phillips'
}; 
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustersergio-czq9b.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

describe('POST /film', function(){
    //before(async () => {
    //    try{
    //        await moongose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    //        process.env.USE_TEST_DB = true;
    //    } catch(err) {
    //        console.log(err);
    //        process.exit(1);
    //    }
    //});
//
    //after(async () => {
    //    //await modules.deleteFilmTitle(film.title);
    //    await moongose.disconnect();
    //    process.env.USE_TEST_DB = false;
    //});

    it('Add a film', function(done) {
        await moongose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        supertest(app)
        .post('/films')
        .send(film)
        .expect(201, done);         
    });
});

