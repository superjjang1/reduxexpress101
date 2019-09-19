var express = require('express');
var router = express.Router();
const db = require('../db');


/* GET home page. */
router.get('/dairy-inv', function(req, res, next) {
 const seedData = [
    {
        food: 'milk',
        quantity: 1
    },
    {
        food: 'cheese',
        quantity: 1
    },
    {
        food: 'yogurt',
        quantity: 1
    },
    {
        food: 'kefir',
        quantity: 2
    }
]
res.json(seedData)
});

module.exports = router;
