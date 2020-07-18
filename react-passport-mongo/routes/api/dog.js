const router = require("express").Router();
const dogCont = require("../controllers/dogController");

// html route to get all dogs of the logged in user
router.get("/dogs", dogCont.findAll);

router.post("/create/:id", dogCont.create);

router.post("/populate/:id", dogCont.userByDog);

router.put("/update/:id", dogCont.update);

router.delete("/remove/:id", dogCont.remove);

module.exports = router;


// const router = require("express").Router();
// let Dog = require("../../models/Dogs");



// router.route('/add').post((req, res) => {
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
//     console.log('test2')
//     newDog.save().then(() => res.json('Dog added'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
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

// router.route('/:id').delete((req, res) => {
//     Dog.findByIdAndDelete(req.params.id).then(() => res.json('Dog removed'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/').get((req, res) => {
//     Dog.find().then(dogs => res.json(dogs))
//         .catch(err => res.status(400).json('Error:' + err));
// });

// module.exports = router;