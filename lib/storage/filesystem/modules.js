//Add
    //Require addFilm module
    const addFilm = require('./addFilm/addFilm');

    //Export addFilm module
    exports.addFilm = addFilm.addFilm;

//Delete
    //Require deleteFilm modules
    const deleteFilm = require('./deleteFilm/deleteFilm')
    const deleteFilmDirector = require('./deleteFilm/deleteFilmDirector');
    const deleteFilmGenre = require('./deleteFilm/deleteFilmGenre');
    const deleteFilmLength = require('./deleteFilm/deleteFilmLength');
    const deleteFilmYear = require('./deleteFilm/deleteFilmYear');
    const deleteFilmTitle = require('./deleteFilm/deleteFilmTitle');

    //Exports modifyFilm modules
    exports.deleteFilm = deleteFilm.deleteFilm;
    exports.deleteFilmTitle = deleteFilmTitle.deleteFilmTitle;
    exports.deleteFilmYear = deleteFilmYear.deleteFilmYear;
    exports.deleteFilmLength = deleteFilmLength.deleteFilmLength;
    exports.deleteFilmGenre = deleteFilmGenre.deleteFilmGenre;
    exports.deleteFilmDirector = deleteFilmDirector.deleteFilmDirector;

//Get
    //Require getFilm modules
    const getFilm = require('./getFilm/getFilm');
    const getFilmDirector = require('./getFilm/getFilmDirector');
    const getFilmGenre = require('./getFilm/getFilmGenre');
    const getFilmLength = require('./getFilm/getFilmLength');
    const getFilmYear = require('./getFilm/getFilmYear');
    const getFilmTitle = require('./getFilm/getFilmTitle');

    //Exports getFilm modules
    exports.getFilm = getFilm.getFilm;
    exports.getFilmDirector = getFilmDirector.getFilmDirector;
    exports.getFilmGenre = getFilmGenre.getFilmGenre;
    exports.getFilmLength = getFilmLength.getFilmLength;
    exports.getFilmYear = getFilmYear.getFilmYear;
    exports.getFilmTitle = getFilmTitle.getFilmTitle;

//Modify
    //Require modifyFilm modules
    const modifyFilm = require('./modifyFilm/modifyFilm')
    const modifyFilmDirector = require('./modifyFilm/modifyFilmDirector');
    const modifyFilmGenre = require('./modifyFilm/modifyFilmGenre');
    const modifyFilmLength = require('./modifyFilm/modifyFilmLength');
    const modifyFilmYear = require('./modifyFilm/modifyFilmYear');
    const modifyFilmTitle = require('./modifyFilm/modifyFilmTitle');
    const modifyFilmSummary = require('./modifyFilm/modifyFilmSummary');

    //Exports modifyFilm modules
    exports.modifyFilm = modifyFilm.modifyFilm;
    exports.modifyFilmTitle = modifyFilmTitle.modifyFilmTitle;
    exports.modifyFilmYear = modifyFilmYear.modifyFilmYear;
    exports.modifyFilmLength = modifyFilmLength.modifyFilmLength;
    exports.modifyFilmGenre = modifyFilmGenre.modifyFilmGenre;
    exports.modifyFilmSummary = modifyFilmSummary.modifyFilmSummary;
    exports.modifyFilmDirector = modifyFilmDirector.modifyFilmDirector;