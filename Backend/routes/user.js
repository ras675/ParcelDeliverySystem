const express = require("express");
const { deleteUser, getAllUser } = require("../controllers/user");
const router = express.Router();

//Deleting user
router.delete("/:id",deleteUser)

//Get all user
router.get("/",getAllUser)

module.exports = router;
