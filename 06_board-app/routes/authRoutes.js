const router = require("express").Router();
const ctrl = require("../controllers/authController");

//등록(Post) ctrl.create
router.post("/", ctrl.signup);
router.post("/login", ctrl.login);

module.exports = router;
