var addModule = require('../lib/database/modules/addFilm');
var getModule = require('../lib/database/modules/getFilm');
var assert = require('assert');
var deleteModule = require('../lib/database/modules/deleteFilm');

var film = {
    title: 'El señor de los anillos: El retorno del rey',
    year: 2003,
    length: 201,
    genre: ['Adventure', 'Drama', 'Fantasy'],
    summary: 'Gandalf and Aragorn lead the World of Men against Sauron army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring',
    director: 'Peter Jackson'
};

describe('Get film', function(){

    it('Ckeck if some films are returned by its title', function(){
        addModule.addFilm(film);
        assert.equal(getModule.getFilmTitle(film.title), 'Some films were returned by its title');
        deleteModule.deleteFilm(film);        
    });

    describe('Check if some films are returned by its year', function(){
        it('Greater than a year', function(){
            addModule.addFilm(film);
            assert.equal(getModule.getFilmYear(film.year - 1, 'greater'), 'Some films with a greater year release were returned');
            deleteModule.deleteFilm(film);
        });

        it('Equal than a year', function(){
            addModule.addFilm(film);
            assert.equal(getModule.getFilmYear(film.year, 'equal'), 'Some films with the same year release were returned');
            deleteModule.deleteFilm(film);
        });
        
        it('Less than a year', function(){
            addModule.addFilm(film);
            assert.equal(getModule.getFilmYear(film.year + 1, 'less'), 'Some films with a less year release were returned');
            deleteModule.deleteFilm(film);
        });
    });

    describe('Check if some films are returned by its length', function(){
        it('Greater than a length', function(){
            addModule.addFilm(film);
            assert.equal(getModule.getFilmLength(film.length - 1, 'greater'), 'Some films with a greater length were returned');
            deleteModule.deleteFilm(film);
        });

        it('Equal than a length', function(){
            addModule.addFilm(film);
            assert.equal(getModule.getFilmLength(film.length, 'equal'), 'Some films with the same length were returned');
            deleteModule.deleteFilm(film);
        });
        
        it('Less than a length', function(){
            addModule.addFilm(film);
            assert.equal(getModule.getFilmLength(film.length + 1, 'less'), 'Some films with a less length were returned');
            deleteModule.deleteFilm(film);
        });
    });

    it('Ckeck if some films are returned by its genre', function(){
        addModule.addFilm(film);
        assert.equal(getModule.getFilmGenre(film.genre[0]), 'Some films were returned by its genre');
        deleteModule.deleteFilm(film);
    });

    it('Ckeck if some films are returned by its director', function(){
        addModule.addFilm(film);
        assert.equal(getModule.getFilmDirector(film.director), 'Some films were returned by its director');
        deleteModule.deleteFilm(film);
    });
});
