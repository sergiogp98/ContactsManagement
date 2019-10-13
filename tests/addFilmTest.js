var Film = require('../lib/database/modules/addFilm');
var assert = require('assert');

var film = {
    title: 'Joker',
    year: 2019,
    length: 122,
    genre: ['Crime', 'Drama', 'Thriller'],
    summary: 'In Gotham City, mentally-troubled comedian Arthur Fleck embarks on a downward-spiral of social revolution and bloody crime. This path brings him face-to-face with his infamous alter-ego: "The Joker"',
    director: 'Todd Phillips'
};

describe('Add film', function(){
    //Test a film has been added
    it('Check if a film has been added', function(){
        assert.equal(Film.addFilm(film), 'Film added correctly!');
    });
});