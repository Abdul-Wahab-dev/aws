const express = require("express");
const router = express.Router();
const authController = require("../controllers/authContoller");

router.route("/").get(authController.get);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.route("/:code").post(authController.confirmSignup);
module.exports = router;
