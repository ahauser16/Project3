// // const router = require("express").Router();
// // const dogCont = require("../controllers/dogController");

// // // html route to get all dogs of the logged in user
// // router.route("/dogs").get(dogCont.findAll({owner: LoggedinUser}))
// //     .post(dogCont.create);

// // router.route("/dogs/:id").put(dogCont.update)
// //     .delete(dogCont.remove);

// // module.exports = router;


// const router = require("express").Router();
// let Dog = require("../../../../models/Dogs");

// router.route('/dogs').get((req, res) => {
//     Dog.find().then(dogs => res.json(dogs))
//         .catch(err => res.status(400).json('Error:' + err));
// });

// router.route('/dogs/add').post((req, res) => {
//     console.log('test1')
//     const dogname = req.body.dogname;
//     const breed = req.body.breed;
//     const sex = req.body.sex;
//     const weight = req.body.weight;
//     const description = req.body.description

//     const newDog = new Dog({
//         dogname,
//         breed,
//         sex,
//         weight,
//         description
//     });
//     console.log('test');
//     newDog.save().then(() => res.json('Dog added'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/dogs/update/:id').post((req, res) => {
//     Dog.findById(req.params.id).then(dog => {
//         dog.dogname = req.body.dogname;
//         dog.breed = req.body.breed;
//         dog.sex = req.body.sex;
//         dog.weight = req.body.weight;
//         dog.description = req.body.description;

//         dog.save().then(() => res.json('Dog details updated'))
//             .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err))
// });

// router.route('/dogs/:id').delete((req, res) => {
//     Dog.findByIdAndDelete(req.params.id).then(() => res.json('Dog removed'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;