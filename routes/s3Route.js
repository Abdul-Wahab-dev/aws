const express = require("express");
const router = express.Router();
const buckedController = require("../controllers/bucketController");
router.get("/presigned", buckedController.createPresignedURL);

module.exports = router;
