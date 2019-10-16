var addModule = require('../lib/database/modules/addFilm');
var deleteModule = require('../lib/database/modules/deleteFilm');
var modifyModule = require('../lib/database/modules/modifyFilm');
var assert = require('assert');
var sleep = require('sleep');

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

describe('Modify film', function(){
    it('Ckeck if a film title is modified', function(){
        addModule.addFilm(film);    
        assert.equal(modifyModule.modifyFilmTitle(film, modifiedFilm.title), 'Film title modified correctly');
        film.title = modifiedFilm.title;
        deleteModule.deleteFilm(film);
    });

    it('Check if a film year is modified', function(){
        addModule.addFilm(film);
        assert.equal(modifyModule.modifyFilmYear(film, modifiedFilm.year), 'Film year modified correctly');
        film.year = modifiedFilm.year;
        deleteModule.deleteFilm(film);
    });

    it('Check if a film length is modified', function(){
        addModule.addFilm(film);
        assert.equal(modifyModule.modifyFilmLength(film, modifiedFilm.length), 'Film length modified correctly');
        film.length = modifiedFilm.length;
        deleteModule.deleteFilm(film);
    });

    it('Check if a film genre is modified', function(){
        addModule.addFilm(film);
        assert.equal(modifyModule.modifyFilmGenre(film, modifiedFilm.genre), 'Film genre modified correctly');
        film.genre = modifiedFilm.genre;
        deleteModule.deleteFilm(film);
    });

    it('Check if a film summary is modified', function(){
        addModule.addFilm(film);
        assert.equal(modifyModule.modifyFilmSummary(film, modifiedFilm.summary), 'Film summary modified correctly');
        film.summary = modifiedFilm.summary;
        deleteModule.deleteFilm(film);
    });

    it('Check if a film director is modified', function(){
        addModule.addFilm(film);
        assert.equal(modifyModule.modifyFilmDirector(film, modifiedFilm.director), 'Film director modified correctly');
        film.director = modifiedFilm.director;
        deleteModule.deleteFilm(film);
    });
});