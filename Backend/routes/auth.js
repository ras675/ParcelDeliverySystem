const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth");
const router = express.Router();

//Registation

router.post("/register", registerUser);

//Login

router.post("/login", loginUser);

module.exports = router;
