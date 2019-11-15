const app = require('./controllers/routes');
const modules = require('./modules');
const schema = require('./models/schema');
require('dotenv').config();

//Connection variables
    //Use Local database
        //const uri = `mongodb://${process.env.DB_LOCAL_ADDRESS}:${process.env.DB_LOCAL_PORT}/${process.env.DB_NAME}`;
    
    //Use remote database
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustersergio-czq9b.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

modules.createDB(process.env.FILM_DB_NAME, schema.filmSchema);
modules.createDB(process.env.TEST_DB_NAME, schema.filmSchema);
modules.connectDB(uri)
.then(connection => {
    connection.useDb(process.env.FILM_DB_NAME);
    app.set('port', process.env.SERVER_PORT);
    app.listen(process.env.SERVER_PORT);
})
.catch(err => {
    throw new Error(err);
})

module.exports = app;
