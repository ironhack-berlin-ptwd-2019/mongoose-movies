const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

/* GET /movies */
router.get('/', (req, res, next) => {
  Movie.find().populate('actors').then((allMovies) => { // TODO: Note that this should use 'populate'
    res.render('movies/index', { movies: allMovies });
  })
});

/* GET /movies/add */
router.get('/add', (req, res, next) => {
  Celebrity.find().then((allCelebs) => {
    res.render('movies/add', { possibleActors: allCelebs }); // looks for views/celebrities/add.hbs
  })
});

/* GET /movies/12987361928736zuzdguzt/edit */
router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id).then((result) => {
    res.render('movies/edit', result); // looks for views/celebrities/edit.hbs and then passes the database model/object
  })
});

/* POST /movies */
router.post('/', (req, res, next) => {
  const { name, actors } = req.body; // whitelisting
  Movie.create({ name, actors }).then(() => {
    res.redirect('/movies')
  })
});

/* POST /movies/813182763hgsjhdg */
router.post('/:id', (req, res, next) => {
  const { name } = req.body; // whitelisting
  Movie.update(
    { _id: req.params.id },
    { name }).then(() => {
      res.redirect('/movies')
    })
});

module.exports = router;


// NOTE
// res.render('celebrities/edit', { listOfCelebrities: listOfCelebrities }); <== use this for arrays
// res.render('celebrities/edit', oneCelebrityObject); <== use this for objects
