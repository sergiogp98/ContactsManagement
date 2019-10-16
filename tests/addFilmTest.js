var addModule = require('../lib/database/modules/addFilm');
var assert = require('assert');
var deleteModule = require('../lib/database/modules/deleteFilm');
var getModule = require('../lib/database/modules/getFilm');

var film = {
    title: 'Joker',
    year: 2019,
    length: 122,
    genre: ['Crime', 'Drama', 'Thriller'],
    summary: 'In Gotham City, mentally-troubled comedian Arthur Fleck embarks on a downward-spiral of social revolution and bloody crime. This path brings him face-to-face with his infamous alter-ego: "The Joker"',
    director: 'Todd Phillips'
};

describe('Add film', function(){
    it('Check if a film has been added', function(){
        if (getModule.getFilmTitle(film.title) == 'Some films were returned by its title'){
            deleteModule.deleteFilm(film);
        }
        assert.equal(addModule.addFilm(film), 'Film added correctly!');
        deleteModule.deleteFilm(film);
    });
});