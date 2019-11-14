const modules = require('../modules');
require('dotenv').config();

async function checkExistsFilm(film){
    const db = await modules.checkUseTestDB();
    const exists = await db.exists({
        title: film.title,
        director: film.director,
        year: film.year
    });
    return exists;
}

exports.checkExistsFilm = checkExistsFilm;