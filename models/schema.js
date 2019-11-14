//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

let filmSchema = new Schema({
    title: String,
    year: Number,
    length: Number,
    genre: Array,
    summary: String,
    director: String
});

exports.filmSchema = filmSchema;