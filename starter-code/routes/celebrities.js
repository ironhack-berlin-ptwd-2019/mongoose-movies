const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')

/* GET /celebrities */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET /celebrities/add */
router.get('/add', (req, res, next) => {
  res.render('celebrities/add'); // looks for views/celebrities/add.hbs
});

/* GET /celebrities/12987361928736zuzdguzt/edit */
router.get('/:celeb_id/edit', (req, res, next) => {
  Celebrity.findById(req.params.celeb_id).then((result) => {
    res.render('celebrities/edit', result); // looks for views/celebrities/edit.hbs and then passes the database model/object
  })
});

/* POST /celebrities */
router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body; // whitelisting
  Celebrity.create({ name, occupation, catchPhrase }).then(() => {
    res.redirect('/celebrities')
  })
});

/* POST /celebrities/813182763hgsjhdg */
router.post('/:celeb_id', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body; // whitelisting
  Celebrity.update(
    { _id: req.params.celeb_id },
    { name, occupation, catchPhrase }).then(() => {
      res.redirect('/celebrities')
    })
});

module.exports = router;


// NOTE
// res.render('celebrities/edit', { listOfCelebrities: listOfCelebrities }); <== use this for arrays
// res.render('celebrities/edit', oneCelebrityObject); <== use this for objects
