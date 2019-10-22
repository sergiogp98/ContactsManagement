var assert = require('assert');
var modules = require('../lib/storage/filesystem/modules');

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
        modules.addFilm(film);
        assert.ok(modules.deleteFilm(film));
    });
    
    it('Check if some film were deleted by its title', function(){
        modules.addFilm(film);
        assert.ok(modules.deleteFilmTitle(film.title).success);
    });
    
    it('Check if some film were deleted by its year', function(){
        modules.addFilm(film);
        assert.ok(modules.deleteFilmYear(film.year).success);
    });
    
    it('Check if some film were deleted by its length', function(){
        modules.addFilm(film);
        assert.ok(modules.deleteFilmLength(film.length).success);
    });
    
    it('Check if some film were deleted by its genre', function(){
        modules.addFilm(film);
        assert.ok(modules.deleteFilmGenre(film.genre[0]).success);
    });
    
    it('Check if some film were deleted by its director', function(){
        modules.addFilm(film);
        assert.ok(modules.deleteFilmDirector(film.director).success);
    });
});

