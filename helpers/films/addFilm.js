const modules = require('../../modules');

async function addFilm(newFilm) {
    const exists = await modules.checkExistsFilm(newFilm)
    console.log('exists: ', exists);
    if(!exists) {
        return await modules.createFilmDocument(newFilm);
    } else {
        return Promise.resolve(false);
    }
}

exports.addFilm = addFilm;
