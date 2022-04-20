const express = require('express');
const router = express.Router();

const path = require("path");

const upload = require('../middlewares/multerMiddleware');
const validation = require("../middlewares/validator");
const auth=require("../middlewares/Authenticator");
const logged = require("../middlewares/Logged");

const userCont = require("../controllers/userController");

router.get("/Login", logged, userCont.logMethod);
router.get('/Signup', userCont.regMethod);
router.post('/Signup', upload.single("profile_image"), userCont.createMethod);
router.post("/Login", validation, userCont.loginMethod);
router.get("/profile", auth, userCont.profile);


module.exports = router;