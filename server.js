const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const movies = require('./routes/approuter');
const mongoose = require('./config/database');
const app = express();
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.json({ "tutorial": "Build REST API with node.js" });
});
// public route
app.use('/', movies);
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function (err, req, res, next) {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({ message: "Not found" });
    else
        res.status(500).json({ message: "Error : " + err});
});
app.listen(3000, function () { console.log('Node server listening on port 3000'); });