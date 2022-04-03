const express = require('express');
const router = express.Router();

const homeCont = require("../controllers/IndexController");

router.get("/", homeCont.indexMethod);

module.exports = router;