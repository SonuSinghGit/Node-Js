const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["Admin","Student","Visitor"]
    }
});
// userSchema.methods.generateAccessToken=function(){
//     return jwt.sign({
//         name:this.name
//     },process.env.JWT_SECRET,{
//         expiresIn:"10d"
//     })
// }
// userSchema.pre("save",(next)=>{
    
// })
module.exports=mongoose.model("user",userSchema);
