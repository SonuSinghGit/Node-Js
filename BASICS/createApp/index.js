const express= require("express");
const app= express();
const port=4000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello everyone..! <br> How you do in</>");
})


app.post("/cars",(req,res)=>{
    res.send("Application is running");
})
app.listen(port,()=>{
    console.log(`app is listen on port no: ${port}`)
})
