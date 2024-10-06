const express = require("express");
const router = express.Router();
const {createParcel, getAllParcel, updateParcel, getOneParcel, getUserParcel, deleteParcel} = require("../controllers/parcel")

//Add parcel
router.post("/",createParcel)

//Get parcel
router.get("/",getAllParcel)


//Update parcel
router.put("/:id",updateParcel)

//Get one parcel
router.get("/find/:id",getOneParcel)

//Get user parcel
router.post("/me",getUserParcel)

//Delete parcel
router.delete("/:id",deleteParcel)

module.exports = router;