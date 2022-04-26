const express = require('express');
const router = express.Router();

const path = require("path");

const upload = require('../middlewares/multerMiddleware');
const loginValidation = require("../middlewares/loginValidator");
const auth = require("../middlewares/Authenticator");
const logged = require("../middlewares/Logged");
const signupVal = require ("../middlewares/signupValidator");

const userCont = require("../controllers/userController");

router.get("/Login", logged, userCont.logMethod);
router.post("/Login", loginValidation, userCont.loginMethod);

router.get('/Signup', userCont.regMethod);
router.post('/Signup', upload.single("profile_image"), signupVal, userCont.createMethod);

router.get("/profile", auth, userCont.profile);

router.get("/user/:id/useredit", auth, userCont.edit);
router.put("/user/:id", upload.single('profile_image'), userCont.update);

module.exports = router;