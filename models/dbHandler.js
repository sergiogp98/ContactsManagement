const mongoose = require('mongoose');
const schema = require('../models/schema');
const modules = require('../modules');
require('dotenv').config();

//Connection variables
    //Use Local database
        //const uri = `mongodb://${process.env.DB_LOCAL_ADDRESS}:${process.env.DB_LOCAL_PORT}/${process.env.DB_NAME}`;
    
    //Use remote database
        const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustersergio-czq9b.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

function createDB(db, schema){
    schema.set("collection", db);
    Model = mongoose.model(db, schema);
    Model.createCollection();
    console.log(Model);
    return Model;
}

async function connectDB() {
    createDB(process.env.FILM_DB_NAME, schema.filmSchema);
    createDB(process.env.TEST_DB_NAME, schema.filmSchema);
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
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
    db = await modules.checkUseTestDB();
    return await db.create(newFilm);
}

async function findFilmDocument(option) {
    db = await modules.checkUseTestDB();
    return await db.find(option);
}

async function deleteFilmDocumentByID(id) {
    db = await modules.checkUseTestDB();
    return await db.deleteOne({_id: id});
}

async function deleteFilmDocument(option) {
    db = await modules.checkUseTestDB();
    return db.deleteMany(option);    
}

async function updateFilmDocument(id, modifiedFilm) {
    db = await modules.checkUseTestDB();
    return db.updateOne(
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