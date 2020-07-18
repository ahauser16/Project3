// get reference to DB 
const db = require('../../models');
const passport = require('passport');
const { User } = require('../../models');

// const { dog } = require('../../client/src/utils/API');

module.exports = {

   // login user
	login: (req, res, next) => {
      
      //validate request
		if (req.body.email && req.body.password) {
			console.log(req.body.email, req.body.password);
         db.User.authenticate(req.body.email, req.body.password, function (err, user){
            
            // check error (including no user)
            if (err || !user) {
               const err =  new Error('incorrect credentials, no user found')
               next(err)

            // user found 
				} else {
               console.log(`login: `, user._id);
               
               // save user to session to match on login
               req.session.user = user;
               //
               req.user = user;
               
					return res.json(user);
				}
         })
         // .catch(error => next (error));

      // request missing fields
		} else {
			var err = new Error('All fields required.');
			err.status = 400;
			return next(err);
		}
   },

   // signup user
   create: async (req, res) => {
   
      // create user in db
      const user = db.User.create({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password
      })

      // redirect to login
      .then(() => res.redirect(307, '/api/user/login'))
      .catch(err => {
         console.log(err.message)
         res.status(401).json(err.message)
      });
   },

   find: async(req, res) => {
      const user = await User.find()
      return res.send(user)
   },

   userDogs: async(req, res) => {
      const user = await User.findById(req.params)
         .populate('dogname')
      res.send(user.dogname)
   },
      
   signout: (req, res) => {
      console.log('signed out:', req.session.user.email )
      // destroy session
      req.session.destroy();
      // clear cookie on the client side
      res
         .status(200)
         .clearCookie('__id')
         .json({msg:'successfuly signed out'});
   },
   
   // authenticate user
	authenticate: (req, res, next) => {
      console.log(req.session);
      res.json(req.session.user);
   },
};
