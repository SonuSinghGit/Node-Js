const express = require("express");
const app = express();
require("dotenv").config();

const PORT=process.env.PORT ||5000;

//middleware to parse json reuqest body
app.use(express.json());

//import the todo api routes
const createTodo= require("./routes/todo");
app.use("/api/v1",createTodo)

//start the server
app.listen(PORT,()=>{
    console.log("Server is runnig on port ",`${PORT}`)

})
//connect to db 
const dbConnect= require("./config/database")
dbConnect();

