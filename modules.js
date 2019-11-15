//Film modules
    //Add
    const addFilm = require('./helpers/films/addFilm');
    exports.addFilm = addFilm.addFilm;

    //Delete
    const deleteFilm = require('./helpers/films/deleteFilm')
    exports.deleteFilm = deleteFilm.deleteFilm,
    exports.deleteFilmDirector = deleteFilm.deleteFilmDirector,
    exports.deleteFilmGenre = deleteFilm.deleteFilmGenre,
    exports.deleteFilmLength = deleteFilm.deleteFilmLength,
    exports.deleteFilmLessLength = deleteFilm.deleteFilmLessLength,
    exports.deleteFilmGreaterLength = deleteFilm.deleteFilmGreaterLength,
    exports.deleteFilmTitle = deleteFilm.deleteFilmTitle,
    exports.deleteFilmYear = deleteFilm.deleteFilmYear,
    exports.deleteFilmLessYear = deleteFilm.deleteFilmLessYear,
    exports.deleteFilmGreaterYear = deleteFilm.deleteFilmGreaterYear

    //Get
    const getFilm = require('./helpers/films/getFilm');
    exports.getFilm = getFilm.getFilm;
    exports.getFilmDirector = getFilm.getFilmDirector;
    exports.getFilmGenre = getFilm.getFilmGenre;
    exports.getFilmLength = getFilm.getFilmLength;
    exports.getFilmLessLength = getFilm.getFilmLessLength;
    exports.getFilmGreaterLength = getFilm.getFilmGreaterLength;
    exports.getFilmYear = getFilm.getFilmYear;
    exports.getFilmLessYear = getFilm.getFilmLessYear;
    exports.getFilmGreaterYear = getFilm.getFilmGreaterYear;
    exports.getFilmTitle = getFilm.getFilmTitle;

    //Modify
    const modifyFilm = require('./helpers/films/modifyFilm')
    exports.modifyFilm = modifyFilm.modifyFilm;

//DB modules
const dbHandler = require('./models/dbHandler');
exports.connectDB = dbHandler.connectDB;
exports.disconnectDB = dbHandler.disconnectDB;
exports.createDB = dbHandler.createDB;
exports.getDB = dbHandler.getDB;
exports.getDBContent = dbHandler.getDBContent;
exports.createFilmDocument = dbHandler.createFilmDocument;
exports.findFilmDocument = dbHandler.findFilmDocument;
exports.deleteFilmDocumentByID = dbHandler.deleteFilmDocumentByID;
exports.deleteFilmDocument = dbHandler.deleteFilmDocument;
exports.updateFilmDocument = dbHandler.updateFilmDocument;
exports.getConnection = dbHandler.getConnection;

//Check film
const checkFilm = require('./middlewares/checkFilm');
exports.checkExistsFilm = checkFilm.checkExistsFilm;

//HTTP modules
const httpHandler = require('./middlewares/httpHandler');
exports.getResponse = httpHandler.getResponse;
exports.errorResponse = httpHandler.errorResponse;
exports.deleteResponse = httpHandler.deleteResponse;
exports.postResponse = httpHandler.postResponse;
exports.putResponse = httpHandler.putResponse;
