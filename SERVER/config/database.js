const mongoose= require("mongoose");

require("dotenv").config();

exports.connectWithDb = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("DB ka connection is sucesseful"))
    .catch( (error) => {
        console.log("Issue in DB connection");
        console.error(error.message);
        process.exit(1);
    } )

};

module.exports=connectWithDb;