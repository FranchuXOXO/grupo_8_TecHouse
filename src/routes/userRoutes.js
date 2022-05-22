const express = require('express');
const path = require("path");

const router = express.Router();

// Middlewares
const upload = require('../middlewares/multerMiddlewareUsers');
const loginValidation = require("../middlewares/loginValidator");
const auth = require("../middlewares/Authenticator");
const logged = require("../middlewares/Logged");
const signupVal = require ("../middlewares/signupValidator");

// Controllers
const userCont = require("../controllers/userController");

// Routes
router.get("/Login", logged, userCont.logMethod);
router.post("/Login", loginValidation, userCont.loginMethod);

router.get('/Signup', userCont.regMethod);
router.post('/Signup', upload.single("profile_image"), signupVal, userCont.createMethod);

router.get("/profile", auth, userCont.profile);

router.get("/user/:id/edit", auth, userCont.edit);
router.put("/user/:id", upload.single('profile_image'), userCont.update);

router.get('/logout/', userCont.logout);

module.exports = router;