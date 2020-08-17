var express = require('express');
var router = express.Router();
var Wallet = require('../models/wallet_service')


/* GET users listing. */
router.get('/', (req, res, next) => {
    Wallet.find({})
        .then(wallet => res.send(wallet))
        .catch(err => res.status(500).send(err))
});

router.post('/', (req, res, next) => {
    Wallet.create(req.body)
        .then(wallet => res.send(wallet))
        .catch(err => res.status(500).send(err))
})

module.exports = router;