const modules = require('../modules');
require('dotenv').config();

async function checkExistsFilm(film){    
    const model = await modules.getDB('Film');
    const exists = await model.exists({
        title: film.title,
        director: film.director,
        year: film.year
    });
    return exists;
}

exports.checkExistsFilm = checkExistsFilm;