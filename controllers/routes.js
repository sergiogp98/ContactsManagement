const express = require('express');
const postRoutes = require('./postRoutes');
const putRoutes = require('./putRoutes');
const getRoutes = require('./getRoutes');
const deleteRoutes = require('./deleteRoutes');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocument = yaml.load(`${__dirname}/../docs/swagger.yml`)


let app = express();
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.json());
app.use('/', postRoutes);
app.use('/', putRoutes);
app.use('/', getRoutes);
app.use('/', deleteRoutes);
app.use(morgan('dev'));

module.exports = app;
