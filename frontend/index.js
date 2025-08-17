const express = require("express");
const app = express();

//load config from env file

require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middle ware to parse json request body
app.use(express.json());


//server started
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`)
})

//connect to the database
const dbConnect=require("./config/database");
dbConnect();