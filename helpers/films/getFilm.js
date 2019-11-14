const modules = require('../../modules');

async function getFilm(id){
    return await modules.findFilmDocument({_id: id});
}

async function getFilmDirector(director){
    return await modules.findFilmDocument({director: director});
}

async function getFilmGenre(genre){
    return await modules.findFilmDocument({genre: genre});
}

async function getFilmLength(length) {
    return await modules.findFilmDocument({length: length});
}

async function getFilmLessLength(length) {
    return await modules.findFilmDocument({length: {$lt: length}});
}

async function getFilmGreaterLength(length) {
    return await modules.findFilmDocument({length: {$gt: length}});
}

async function getFilmTitle(title) {
    return await modules.findFilmDocument({title: title});
}

async function getFilmYear(year) {
    return await modules.findFilmDocument({year: year});
}

async function getFilmLessYear(year) {
    return await modules.findFilmDocument({year: {$lt: year}});
}

async function getFilmGreaterYear(year) {
    return await modules.findFilmDocument({year: {$gt: year}});
}

exports.getFilmYear = getFilmYear;
exports.getFilmLessYear = getFilmLessYear;
exports.getFilmGreaterYear = getFilmGreaterYear;
exports.getFilmTitle = getFilmTitle;
exports.getFilmLength = getFilmLength;
exports.getFilmLessLength = getFilmLessLength;
exports.getFilmGreaterLength = getFilmGreaterLength;
exports.getFilmGenre = getFilmGenre;
exports.getFilmDirector = getFilmDirector;
exports.getFilm = getFilm;

