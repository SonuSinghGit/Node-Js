
const mongoose= require("mongoose")

require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then((response)=>{console.log("DB Connnected successfully: ",response.connection.host)})
    .catch((err)=>{
        console.log("DB connected issue");
        console.log(err);
        process.exit(1);
    });
}