var Film = require('../lib/database/modules/deleteFilm');
var assert = require('assert');

describe('Delete film', function(){
    //Test if a film has been deleted by its title
    it('Check if some film were deleted by its title', function(){
        assert.equal(Film.deleteFilmTitle('Joker'), 'Some films were deleted')
    });
});
