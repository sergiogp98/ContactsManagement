const modules = require('../modules');

async function connectTestDB() {
    return await modules.connectDB();
}

connectTestDB()
.then(connection => {
    return connection
})
.catch(err => {
    throw new Error(err);
})