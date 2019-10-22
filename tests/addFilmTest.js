var assert = require('assert');
var modules = require('../lib/storage/filesystem/modules');

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
        if(modules.getFilm(film).success){
            modules.deleteFilm(film);
        }
        assert.ok(modules.addFilm(film).success); 
    });
});