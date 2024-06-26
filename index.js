const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Happys")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const express = require("express");

const app = express()

app.use(express.static('public'))

// for user routes
const userRoute = require('./routes/userRoute')
app.use('/',userRoute)

app.listen(5000,function(){
    console.log("Server is running in 5000....")
    console.log('welcome to happys')
})