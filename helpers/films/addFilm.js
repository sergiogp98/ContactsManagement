const modules = require('../../modules');

async function addFilm(newFilm) {
    const exists = await modules.checkExistsFilm(newFilm)
    if(!exists) {
        return await modules.createFilmDocument(newFilm);
    } else {
        return Promise.resolve(false);
    }
}

exports.addFilm = addFilm;
