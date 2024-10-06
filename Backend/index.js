const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const parcelRoute = require("./routes/parcel")

dotenv.config();

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/users",userRoute)
app.use("/api/v1/parcels",parcelRoute)

//Database Connection
const DB = process.env.DB;
mongoose.connect(DB).then(() => {
    console.log("DB connection is successful");
}).catch((err)=>{
    console.log(err);
})

//Server
const PORT = process.env.PORT;
app.listen(PORT,() =>{
    console.log(`Server is running n port ${PORT}`)
}) 