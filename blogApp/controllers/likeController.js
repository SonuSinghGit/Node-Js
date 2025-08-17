
//import models
const Post=  require("../models/postModel");
const Like = require("../models/likeModel");

//like post
exports.likePost = async (req,res) =>{
    try {
        const {post,user}=req.body;
        const like = new Like({
            post,user,

        });
        const savedLike = await like.save();

        //update the post collection basis on this
        const updatedPost= await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id} }, {new:true}).populate("likes").exec();
        

        res.json({
            post:updatedPost,

        });
    } 
    catch (error) {
        return res.status(400).json({
            error:"Error while liking posts",
        });
        
    }
};

//unlike post
exports.unlikePost= async(req,res)=>{
    try {
        const {post,like}=req.body
        //find and delete like collection me se
        const deletedLike= await Like.findOneAndDelete({ post: post, _id:like});

        //update the post collection
        const updatePost= await Post.findOneAndUpdate(post, 
                                                    {$pull:{likes:deletedLike._id}},
                                                    {new:true});
        
        res.json({
            post:updatePost,
        })
    } 
    catch (error) {
        return res.status(400).json({
            error:"Error while unliking posts",
        });
        
    }
}







exports.dummyLink=(req,res)=>{
    res.send("this is your dummy page babay..")
};