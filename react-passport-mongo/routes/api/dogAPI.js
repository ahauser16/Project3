const router = require("express").Router();
const dogCont = require("../controllers/dogController");

// html route to get all dogs of the logged in user
router.route("/dogs").get(dogCont.findAll({owner: LoggedinUser}))
    .post(dogCont.create);

router.route("/dogs/:id").put(dogCont.update)
    .delete(dogCont.remove);

module.exports = router;
