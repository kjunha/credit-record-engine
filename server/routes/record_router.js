var express = require('express');
var router = express.Router();
var Record = require('../models/record_service')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Record.find({})
    .then(record => {
      res.send(record)
    })
    .catch(err => res.status(500).send(err))
});

router.post('/', (req,res) => {
  Record.create(req.body)
    .then(record => res.send(record))
    .catch(err => res.status(500).send(err))
})

module.exports = router;