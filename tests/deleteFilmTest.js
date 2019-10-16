var addModule = require('../lib/database/modules/addFilm');
var deleteModule = require('../lib/database/modules/deleteFilm');
var assert = require('assert');

var film = {
    title: 'El caballero oscuro',
    year: 2008,
    length: 152,
    genre: ['Crime', 'Drama', 'Action'],
    summary: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan'
};


describe('Delete film', function(){
    it('Check if some film were deleted', function(){
        addModule.addFilm(film);
        assert.equal(deleteModule.deleteFilm(film), 'Some films were deleted')
    });

    it('Check if some film were deleted by its title', function(){
        addModule.addFilm(film);
        assert.equal(deleteModule.deleteFilmTitle(film.title), 'Some films were deleted by its title')
    });

    it('Check if some film were deleted by its year', function(){
        addModule.addFilm(film);
        assert.equal(deleteModule.deleteFilmYear(film.year), 'Some films were deleted by its year')
    });

    it('Check if some film were deleted by its length', function(){
        addModule.addFilm(film);
        assert.equal(deleteModule.deleteFilmLength(film.length), 'Some films were deleted by its length')
    });

    it('Check if some film were deleted by its genre', function(){
        addModule.addFilm(film);
        assert.equal(deleteModule.deleteFilmGenre(film.genre[0]), 'Some films were deleted by its genre')
    });

    it('Check if some film were deleted by its director', function(){
        addModule.addFilm(film);
        assert.equal(deleteModule.deleteFilmDirector(film.director), 'Some films were deleted by its director')
    });
});

