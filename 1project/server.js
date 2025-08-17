const express = require("express")
const app = express();
const bodyParser=require("body-parser");
app.use(bodyParser.json());

const PORT=4000;

app.listen(PORT,()=>{
    console.log("Server is Started At PORT:",`${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("server is runnig");
})
app.post("/api/car",(req,res)=>{
    const {name,brand}=req.body;
    // console.log(name);
    // console.log(brand)
    res.send("Car Submited sucessfull:")

})
const mongoose= require('mongoose')
mongoose.connect("mongodb://localhost:27017/Vehicles",{
    useNewurlParser:true,
    useUnifiedTopology:true 
})
.then(()=>{
    console.log("Connection Sucessfull")
})
.catch((error)=>{
    console.log("Error While Connecting Database",error)
})
