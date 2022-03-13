const express = require('express');
const router = express.Router();
const userCont = require("../controllers/userController")
const validation = require("../middlewares/validator")

const multer = require('multer');
const path = require("path")
const storage = multer.diskStorage({
 destination: function (req, file, cb) {
 cb(null, './public/images/users')
 },
 filename: function (req, file, cb) {
 cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname) )
 }
})
const upload = multer({ storage: storage })


router.get("/Login", userCont.logMethod)
router.get('/Signup', userCont.regMethod)
router.post('/Signup', upload.single("image"), userCont.createMethod)
router.post("/Login", validation, userCont.loginMethod)

module.exports=router