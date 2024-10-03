const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth")

dotenv.config();

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/auth",authRoute)

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