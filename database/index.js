const mongoose = require('mongoose');
const models = require('./models.js')(mongoose);

mongoose.connect('mongodb://localhost/ProductGallery', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;