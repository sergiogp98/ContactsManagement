const app = require('./controllers/routes');
const modules = require('./modules');
require('dotenv').config();

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
