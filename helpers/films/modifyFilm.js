const modules = require('../../modules');

async function modifyFilm(id, modifiedFilm){
    const exists = await modules.checkExistsFilm(modifiedFilm)
    if(!exists) {
        return await modules.updateFilmDocument(id, modifiedFilm);
    } else {
        return Promise.resolve(false);
    }
}

exports.modifyFilm = modifyFilm;
