const app = require('./controllers/routes');
const modules = require('./modules');
const schema = require('./models/schema');
require('dotenv').config();

modules.createDB(process.env.FILM_DB_NAME, schema.filmSchema);
modules.createDB(process.env.TEST_DB_NAME, schema.filmSchema);
modules.connectDB()
.then(connection => {
    connection.useDb(process.env.FILM_DB_NAME);
    app.set('port', process.env.SERVER_PORT);
    app.listen(process.env.SERVER_PORT);
})
.catch(err => {
    throw new Error(err);
})

module.exports = app;
