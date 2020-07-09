const router = require("express").Router();
const walksCont = require("../controllers/walksController");

router.route("/walks").get(walksCont.findAll)
    .post(walksCont.create);

router.route("./walks/:id").delete(walksCont.remove);

module.exports = router;