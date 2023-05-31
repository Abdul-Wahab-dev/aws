const express = require("express");
const router = express.Router();
const authController = require("../controllers/authContoller");
const buckedController = require("../controllers/bucketController");
router.get("/", authController.get);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/presinged", buckedController.createPresignedURL);

router.get("/google-signin/:token", authController.googleLogin);
router.route("/:code").post(authController.confirmSignup);
module.exports = router;
