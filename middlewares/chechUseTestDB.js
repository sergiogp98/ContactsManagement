const modules = require('../modules');
require('dotenv').config();

async function checkUseTestDB() {
    if(process.env.USE_TEST_DB == true) {
        db = await modules.getDB(process.env.TEST_DB_NAME);
    } else {
        db = await modules.getDB(process.env.FILM_DB_NAME);
    }

    return db;
}


exports.checkUseTestDB = checkUseTestDB;