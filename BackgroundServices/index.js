const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cron = require("node-cron");
const mongoose = require("mongoose");
dotenv.config();

//DB coneection

const DB = process.env.DB;
mongoose.connect(DB).then (() => {
    console.log("DB connection is successful")
}).catch((e) => {
    console.log(e);
})

//Task scheduler

const run = () => {
    cron.schedule('* * * * *', () => {       
      }); 
}

run();



//Server

const PORT =  process.env.PORT;
app.listen(PORT, () => {
    console.log(`Backgroundservice is running n port ${PORT}`)
})
