const mongoose= require("mongoose");
require("dotenv").config();

const dbConnect= (()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DataBase Connected Sucessfully"); 
    })
    .catch((error)=>{
        console.log("Error While Connecting Database: ",error)
        process.exit(1);
    })

})

module.exports = dbConnect;