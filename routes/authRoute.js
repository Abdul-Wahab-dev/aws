const express = require("express");
const router = express.Router();
const authController = require("../controllers/authContoller");
const buckedController = require("../controllers/bucketController");
router.get("/", authController.get);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/google-signin", authController.googleLogin);
router.get("/presinged", buckedController.createPresignedURL);

router.route("/:code").post(authController.confirmSignup);
module.exports = router;
