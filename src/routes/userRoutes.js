const express = require('express');
const router = express.Router();
const userCont = require("../controllers/userController")

router.get("/Login", userCont.logMethod)
router.get('/Signup', userCont.regMethod)

module.exports=router