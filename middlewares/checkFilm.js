const modules = require('../modules');
require('dotenv').config();

async function checkExistsFilm(film){
    console.log('Film')
    const model = await modules.getDB(process.env.FILM_COLLECTION_NAME);
    console.log('LLEGA DESPUES')
    const exists = await model.exists({
        title: film.title,
        director: film.director,
        year: film.year
    });
    return exists;
}

exports.checkExistsFilm = checkExistsFilm;