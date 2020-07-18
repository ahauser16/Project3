const router = require('express').Router();
const user = require("./user");
const dog = require('./dog');

// '/api/user' route
router.use('/user', user);
router.use('/dogs', dog);

// calls to '/api/ <- redundant route, for initial testing
router.route('/')
  .get((req, res) => res.json({ sample: 'data' }));

module.exports = router;
