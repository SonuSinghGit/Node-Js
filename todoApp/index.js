const express = require("express");
const app = express();

//load config from env file

require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middle ware to parse json request body
app.use(express.json());

//import routes for TODO API
const toodoRoutes=require("./routes/todos");

//mount the todo ASPI routes
app.use("/api/v1",toodoRoutes);

//server started
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`)
})

//connect to the database
const dbConnect=require("./config/database");
dbConnect();

//default Route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HOMEPAGE baby</h1>`);
})