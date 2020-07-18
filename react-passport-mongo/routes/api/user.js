// ! you can chain a .post().put() and so on in every route.

const router = require('express').Router();
const userFunctions = require('../controllers/user');

router.route('/login')
   .post(userFunctions.login);

router.route('/signup')
   .post(userFunctions.create);

router.route('/signout')
   .get(userFunctions.signout);

router.route('/authenticate')
   .get(userFunctions.authenticate);

router.get('/find', userFunctions.find);
router.get('/find/dog/:id', userFunctions.userDogs)

module.exports = router;
