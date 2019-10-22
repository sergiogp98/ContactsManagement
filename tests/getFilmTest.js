var assert = require('assert');
var modules = require('../lib/storage/filesystem/modules');

var film = {
    title: 'El señor de los anillos: El retorno del rey',
    year: 2003,
    length: 201,
    genre: ['Adventure', 'Drama', 'Fantasy'],
    summary: 'Gandalf and Aragorn lead the World of Men against Sauron army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring',
    director: 'Peter Jackson'
};


describe('Get film', function(){
    it('Ckeck if some films are returned', function(){
        modules.addFilm(film);
        assert.ok(modules.getFilm(film).success);        
    });
    
    it('Ckeck if some films are returned by its title', function(){
        assert.ok(modules.getFilmTitle(film.title).success);        
    });
    
    describe('Check if some films are returned by its year', function(){
        it('Greater than a year', function(){
            assert.ok(modules.getFilmYear(film.year - 1, 'greater').success);
        });

        it('Equal than a year', function(){
            assert.ok(modules.getFilmYear(film.year, 'equal').success);
        });
        
        it('Less than a year', function(){
            assert.ok(modules.getFilmYear(film.year + 1, 'less').success);
        });
    });

    describe('Check if some films are returned by its length', function(){
        it('Greater than a length', function(){
            assert.ok(modules.getFilmLength(film.length - 1, 'greater').success);
        });

        it('Equal than a length', function(){
            assert.ok(modules.getFilmLength(film.length, 'equal').success);
        });
        
        it('Less than a length', function(){
            assert.ok(modules.getFilmLength(film.length + 1, 'less').success);
        });
    });
    
    it('Ckeck if some films are returned by its genre', function(){
        assert.ok(modules.getFilmGenre(film.genre[0]).success);
    });
    
    it('Ckeck if some films are returned by its director', function(){
        assert.ok(modules.getFilmDirector(film.director).success);
    });
});
