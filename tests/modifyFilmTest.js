var assert = require('assert');
var modules = require('../lib/storage/filesystem/modules');

var film = {
    title: 'Pulp Fiction',
    year: 1994,
    length: 154,
    genre: ['Crime', 'Drama'],
    summary: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    director: 'Quentin Tarantino'
};

var modifiedFilm = {
    title: 'Batman',
    year: 2020,
    length: 150,
    genre: 'Science fiction',
    summary: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    director: 'Robert de Niro'
};

modules.addFilm(film);

describe('Modify film', function(){
    it('Ckeck if a film title is modified', function(){
        assert.ok(modules.modifyFilmTitle(film, modifiedFilm.title).success);
    });

    it('Check if a film year is modified', function(){
        assert.ok(modules.modifyFilmYear(film, modifiedFilm.year).success);
    });

    it('Check if a film length is modified', function(){
        assert.ok(modules.modifyFilmLength(film, modifiedFilm.length).success);
    });

    it('Check if a film genre is modified', function(){
        assert.ok(modules.modifyFilmGenre(film, modifiedFilm.genre).success);
    });

    it('Check if a film summary is modified', function(){
        assert.ok(modules.modifyFilmSummary(film, modifiedFilm.summary).success);
    });

    it('Check if a film director is modified', function(){
        assert.ok(modules.modifyFilmDirector(film, modifiedFilm.director).success);
    });
});