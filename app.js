const app = require('./controllers/routes');
const modules = require('./modules');
const schema = require('./models/schema');

//Environmental variables
const SERVER_PORT = process.env.PORT || 8080;
const DB_PORT = process.env.LOCAL_DB_PORT || 27017;
const ADDRESS = process.env.LOCAL_DB_ADDRESS || "localhost";
const DB_USERNAME = process.env.DB_USERNAME || "Sergio";
const DB_PASSWORD = process.env.DB_PASSWORD || "admin";
const DB_NAME = process.env.DB_NAME || "MultimediaManagement";
const COLLECTION_NAME = process.env.COLLECTION_NAME || "Film";

//Connection variables
    //Use Local database
        //const uri = `mongodb://${ADDRESS}:${DB_PORT}/${DB_NAME}`;
    
    //Use remote database
    const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@clustersergio-czq9b.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

async function startAPI() {
    await modules.connectDB(uri);
    await modules.createDB(COLLECTION_NAME, schema.filmSchema);
    app.set('port', SERVER_PORT);
    app.listen(SERVER_PORT, function() {
        console.log(`Listening on http://${ADDRESS}:${SERVER_PORT}`);
    });
}

startAPI();

module.exports = app;
