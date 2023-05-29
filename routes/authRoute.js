const express = require("express");
const router = express.Router();
const authController = require("../controllers/authContoller");

router.route("/").get(authController.get).post(authController.signup);

module.exports = router;
