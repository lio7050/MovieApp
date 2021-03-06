//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://prashsin:bmcAdm1n@cluster0.txo5n.mongodb.net/Movies?retryWrites=true&w=majority';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;