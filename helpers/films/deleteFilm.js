const modules = require('../../modules');

async function deleteFilm(id){
    return await modules.deleteFilmDocumentByID(id);
}

async function deleteFilmDirector(director){
    return await modules.deleteFilmDocument({director: director});
}

async function deleteFilmGenre(genre){
    return await modules.deleteFilmDocument({genre: genre});
}

async function deleteFilmLength(length){
    return await modules.deleteFilmDocument({length: length});
}

async function deleteFilmLessLength(length){
    return await modules.deleteFilmDocument({length: {$lt: length}});
}

async function deleteFilmGreaterLength(length){
    return await modules.deleteFilmDocument({length: {$gt: length}});
}

async function deleteFilmTitle(title){
    return await modules.deleteFilmDocument({title: title});
}

async function deleteFilmYear(year){
    return await modules.deleteFilmDocument({year: year});
}

async function deleteFilmLessYear(year){
    return await modules.deleteFilmDocument({year: {$lt: year}});
}

async function deleteFilmGreaterYear(year){
    return await modules.deleteFilmDocument({year: {$gt: year}});
}

module.exports = {
    deleteFilm: deleteFilm,
    deleteFilmDirector: deleteFilmDirector,
    deleteFilmGenre: deleteFilmGenre,
    deleteFilmLength: deleteFilmLength,
    deleteFilmLessLength: deleteFilmLessLength,
    deleteFilmGreaterLength: deleteFilmGreaterLength,
    deleteFilmTitle: deleteFilmTitle,
    deleteFilmYear: deleteFilmYear,
    deleteFilmLessYear: deleteFilmLessYear,
    deleteFilmGreaterYear: deleteFilmGreaterYear
}


