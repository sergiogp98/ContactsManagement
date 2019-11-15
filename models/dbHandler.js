const mongoose = require('mongoose');
const schema = require('../models/schema');

function createDB(dbName, dbSchema){
    dbSchema.set("collection", dbName);
    const Model = mongoose.model(dbName, dbSchema);
    return Model.createCollection();
}

async function connectDB(uri) {
    return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) console.error(err);
    });
}

async function getConnection() {
    return await mongoose.connection;
}

async function disconnectDB() {
    return await mongoose.disconnect();    
}

async function getDB(name) {
    return await mongoose.model(name, schema.filmSchema);
} 

async function getDBContent(name) {
    return await mongoose.model(name, schema.filmSchema).find({});   
}

async function createFilmDocument(newFilm) {
    return await mongoose.model('Film').create(newFilm);
}

async function findFilmDocument(option) {
    return await mongoose.model('Film').find(option);
}

async function deleteFilmDocumentByID(id) {
    return await mongoose.model('Film').deleteOne({_id: id});
}

async function deleteFilmDocument(option) {
    return await mongoose.model('Film').deleteMany(option);    
}

async function updateFilmDocument(id, modifiedFilm) {
    return await mongoose.model('Film').updateOne(
        {_id: id}, 
        {
            title: modifiedFilm.title,
            year: modifiedFilm.year,
            length: modifiedFilm.length,
            genre: modifiedFilm.genre,
            summary: modifiedFilm.summary,
            director: modifiedFilm.director, 
        },
        {omitUndefined: true}
    );
}

module.exports = {
    createDB: createDB,
    getDBContent: getDBContent,
    getDB: getDB,
    connectDB: connectDB,
    disconnectDB: disconnectDB,
    createFilmDocument: createFilmDocument,
    findFilmDocument: findFilmDocument,
    deleteFilmDocumentByID: deleteFilmDocumentByID,
    deleteFilmDocument: deleteFilmDocument,
    updateFilmDocument: updateFilmDocument,
    getConnection: getConnection
}