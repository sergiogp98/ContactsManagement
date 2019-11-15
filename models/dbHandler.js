const mongoose = require('mongoose');
const schema = require('../models/schema');
require('dotenv').config();


function createDB(dbName, dbSchema){
    dbSchema.set("collection", dbName);
    const Model = mongoose.model(dbName, dbSchema);
    return Model.createCollection();
}

async function connectDB(uri) {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) console.error(err);
    });
    return await mongoose.connection;
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

    //db = mongoose.connection;

    //
    //DB states:
    //    '0': 'disconnected',
    //    '1': 'connected',
    //    '2': 'connecting',
    //    '3': 'disconnecting',
    //    '99': 'uninitialized'
    //
    //
    //switch(db._readyState){
    //    case 0:
    //        return {'success': false, 'message': 'Database disconnected'};
    //    case 1:
    //        return {'success': true, 'message': 'Connected to database'};
    //    case 2:
    //        return {'success': true, 'message': 'Connecting to database'};
    //    case 3:
    //        return {'success': false, 'message': 'Disconnecting of database'};
    //    case 99:
    //        return {'success': false, 'message': 'Uninitialized database'};

    //}



/*
connectDB().then(response => {
    if(response.success){
        createModel('Film', schema.filmSchema).then(filmModel => {
            addFilm(filmModel, film).then(response => {
                console.log(response);
            });
        });
    }else{
        console.log('Not connected db');
    }
});
            /*
            filmModel.exists({
                title: 'Joker',
                director: 'Todd Phillips'
            }).then(exist => {
                if(exist){
                    console.log('Film exits');
                }else{
                    let newFilm = new filmModel({
                        title: 'Joker',
                        year: 2019,
                        length: 122,
                        genre: ['Crime', 'Drama', 'Thriller'],
                        summary: 'In Gotham City, mentally-troubled comedian Arthur Fleck embarks on a downward-spiral of social revolution and bloody crime. This path brings him face-to-face with his infamous alter-ego: "The Joker"',
                        director: 'Todd Phillips'
                    });
                    newFilm.save();
                    console.log('Film does not exist');
                }
            })
            */


/*
if(repsonse.success){
    
   

    let exist = await filmModel.exists({
        title: 'Joker',
        director: 'Todd Phillips'
    });

    if(exist){
        console.log('Film exits');
    }else{
        console.log('Film does not exist');
    }
    //newFilm.save();
}
*/