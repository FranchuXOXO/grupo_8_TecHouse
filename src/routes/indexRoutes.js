const express = require('express');
const indexCont = require('../controllers/IndexController');
const router = express.Router();
const homeCont = require("../controllers/IndexController")

router.get("/", homeCont.indexMethod)

module.exports=router