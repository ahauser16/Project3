// const router = require("express").Router();
// const walksCont = require("../controllers/walksController");

// router.route("/walks").get(walksCont.findAll)
//     .post(walksCont.create);

// router.route("./walks/:id").delete(walksCont.remove);

// module.exports = router;

const router = require("express").Router();
let Walk = require("../../models/Walks");

router.route('/').get((req, res) => {
    Walk.find().then(walks => res.json(walks))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {
    const savedWalk = req.savedWalk;
    const estimatedTime = Number(req.estimatedTime);
    const timeTaken = Number(req.timeTaken);
    const date = Date.parse(req.date);

    const newWalk = new Walk({
        savedWalk,
        estimatedTime,
        timeTaken,
        date
    });

    newWalk.save().then(() => res.json('Walk added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Walk.findById(req.params.id).then(walk => {
        walk.savedWalk = req.body.savedWalk;
        walk.estimatedTime = Number(req.body.estimatedTime);
        walk.timeTaken = Number(req.body.timeTaken);
        walk.date = Date.parse(req.body.date);

        walk.save().then(() => res.json('Walk details updated'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
    Walk.findByIdAndDelete(req.params.id).then(() => res.json('Walk removed'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;