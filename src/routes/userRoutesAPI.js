const express = require('express');
const path = require("path");

const router = express.Router();

// Controllers
const userContAPI = require("../controllers/userControllerAPI");

// Routes

router.get("/users/", userContAPI.usersCount);
router.get("/users/:id", userContAPI.usersArray);
router.get("/users/image", userContAPI.userImage);

module.exports = router;