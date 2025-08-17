const File= require("../models/File");
const cloudinary=require("cloudinary").v2;

//localfileupload -> handler function

exports.localFileUpload = async(req,res)=>{
    try {
        //fetch file from request
        const file=req.files.file;
        console.log("FILE COMES successfully-> ",file);

        //create path where file need to be stored on server 
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH->",path);

        //add path to the move function
        file.mv(path,(err)=>{
            console.log(err);
        });

        //create a successful response
      
        res.json({
            success:true,
            message:"Local file Uploaded successfully"

        });

        
    } catch (error) {
        console.log("not able to upload fil eon server");
        console.log(error);
    }
}

function isFileTypeSupported(type,supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file,folder,quality){
    const options={folder};
    console.log("temp file path",file.tempFilePath);

    if(quality){
        options.quality=quality;
    }

    
    options.resource_type="auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

//image upload ka handler
exports.imageUpload=async (req,res)=>{
    try {
        //data fetch
        const {name,tags,email}=req.body;
        console.log(name,tags,email);

        const file=req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes=["jpg","jpeg","png"];
        const fileType= file.name.split('.')[1].toLowerCase();
        console.log("file Type:",fileType);

        if(!isFileTypeSupported(fileType,supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:"File formate not supported",
            })
        }
        //file formate suppoted
        console.log("uploaded to sonu singh");
        const response=await uploadFileToCloudinary(file,"sonusingh");
        console.log(response);
        
        //db me entry save karna 
        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });
        
        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image Successfully Uploaded",
        })

    } catch (error) {
        console.error(error);
        res.status(400).json({
            sucess:false,
            message:"something went wrong",
        })
        
    }
}

//video upload handler

exports.videoUpload= async (req,res)=>{
    try {
        //data fetch
        const {name,tags,email}=req.body;
        console.log(name,tags,email);

        const file=req.files.videoFile;

         //validation
         const supportedTypes=["mp4","mov"];
         const fileType= file.name.split('.')[1].toLowerCase();
         console.log("file Type:",fileType);
 
         if(!isFileTypeSupported(fileType,supportedTypes)) {
             return res.status(400).json({
                 success:false,
                 message:"File formate not supported",
             })
         }

         //file formate suppoted
        console.log("uploaded to sonu singh");
        const response=await uploadFileToCloudinary(file,"sonusingh");
        console.log(response);

        //db me entry save karna 
        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"video Successfully Uploaded",
        })

        
    } catch (error) {
        console.error(error);
        res.status(400).json({
            sucess:false,
            message:"something went wrong",
        });
               
    }
}

//imageSizeReducer
exports.imageSizeReducer= async(req,res)=>{
    try {
        //data fetch
        const {name,tags,email}=req.body;
        console.log(name,tags,email);

        const file=req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes=["jpg","jpeg","png"];
        const fileType= file.name.split('.')[1].toLowerCase();
        console.log("file Type:",fileType);

        if(!isFileTypeSupported(fileType,supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:"File formate not supported",
            })
        }
        //file formate suppoted hai
        console.log("uploaded to sonu singh");
        const response=await uploadFileToCloudinary(file,"sonusingh",30);
        console.log(response);
        
        //db me entry save karna 
        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });
        
        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image Successfully Uploaded",
        })    
        
    } catch (error) {
        console.error(error);
        res.status(400).json({
            sucess:false,
            message:"something went wrong",
        });
        
    }
}