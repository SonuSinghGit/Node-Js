const express= require("express");
const router=express.Router();

const {login,signup}=require("../Controller/Auth");
const {auth,isStudent,isAdmin}=require("../middlewares/auth");

router.post("/login",login);
router.post("/signup",signup);

//testing protected routes for the single middleware
router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route for TEST", 

    });
});
//protected route

router.get("/student",auth,isStudent, (req,res) => {
    res.json({
        success:true,
        message:"welcome to the protected route for student", 

    });
});

router.get("/admin",auth,isAdmin, (req,res) => {
    res.json({
        success:true,
        message:"welcome to the protected route for Admin", 

    });
});

module.exports=router; 