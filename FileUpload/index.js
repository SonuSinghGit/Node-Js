//app create
const express= require('express');
const app =express();

//PORT find krna h
require("dotenv").config();
const PORT=process.env.PORT || 3000;

//middleware add krna h
app.use(express.json());
const fileupload=require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

//db connect krna h
const db=require("./config/database");
db.connect();

//cloud se connect karna h
const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//api route mount krna h
const Upload=require("./routes/FileUpload");
app.use('/api/v1/upload',Upload);

//activate server
app.listen(PORT,()=>{
    console.log(`App is running at: ${PORT}`);
})