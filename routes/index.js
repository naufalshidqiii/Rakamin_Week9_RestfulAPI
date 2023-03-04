const express = require("express");
const router = express.Router();
const movies_router = require("./movies.js");

router.use("/", movies_router);

module.exports = router;
