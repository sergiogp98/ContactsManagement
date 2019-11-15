const app = require('./controllers/routes');
const modules = require('./modules');
const schema = require('./models/schema');

//Environmental variables
const SERVER_PORT = process.env.SERVER_PORT || 8080;
const DB_PORT = process.env.LOCAL_DB_PORT || 27017;
const ADDRESS = process.env.LOCAL_DB_ADDRESS || "localhost";
const DB_USERNAME = process.env.DB_USERNAME || "admin";
const DB_PASSWORD = process.env.DB_PASSWORD || "admin";
const DB_NAME = process.env.DB_NAME || "MultimediaManagement";
const COLLECTION_NAME = process.env.COLLECTION_NAME || "Film";

//Connection variables
    //Use Local database
        //const uri = `mongodb://${ADDRESS}:${DB_PORT}/${DB_NAME}`;
    
    //Use remote database
    const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@clustersergio-czq9b.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

schema.filmSchema.set("collection", COLLECTION_NAME);
modules.createDB(COLLECTION_NAME, schema.filmSchema);
modules.connectDB(uri)
.then(connection => {
    connection.useDb(DB_NAME);
    app.set('port', SERVER_PORT);
    app.listen(SERVER_PORT);
})
.catch(err => {
    throw new Error(err);
})

module.exports = app;
