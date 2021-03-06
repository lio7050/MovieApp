const Movies = require('../models/movies');
module.exports = {
   //api to add new new movie
   create: function (req, res, next) {
      Movies.create({ name: req.body.name, year: req.body.year, director: req.body.director }, function (err, result) {
         if (err)
            next(err);
         else
            res.json({ status: "success", message: "Movie with name : " + req.body.name + " is added successfully" });

      });
   },

   //api to add multiple movies
   multiple: function (req, res, next) {
      var movieArr = req.body;
      Movies.collection.insertMany(movieArr, function (err, result) {
         if (err)
            next(err);
         else
            res.json({ status: "success", message: "Movies added successfully" });

      });
   },

   //api to search all the movies or specified movies
   search: function (req, res, next) {
      let moviesList = [];
      var query = req.query;
      if(query.hasOwnProperty("name")) {
         query["name"] = query.name;
      }
      Movies.find(query, function (err, result) {
         if (err)
            next(err);
         else {
            for (let movie of result) {
               moviesList.push({ name: movie.name, year: movie.year, director: movie.director });
            }
            res.json({ status: "success", data: moviesList });
         }
      }).skip(0).limit(5);
   },
}