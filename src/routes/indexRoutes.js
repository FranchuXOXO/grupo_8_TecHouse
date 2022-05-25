const express = require('express');
const router = express.Router();

const homeCont = require("../controllers/IndexController");

router.get("/", homeCont.index);

module.exports = router;