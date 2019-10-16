
var express = require('express');
var app = express();
var logger = require('morgan');

app.use(logger('dev'));

module.exports = app;