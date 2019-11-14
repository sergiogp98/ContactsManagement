const modules = require('../../modules');

async function modifyFilm(id, modifyFilm){
    return await modules.updateFilmDocument(id, modifyFilm);
}

exports.modifyFilm = modifyFilm;
