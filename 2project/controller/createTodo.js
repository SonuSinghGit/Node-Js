const  Todo = require("../models/Todo");

//create route handler
exports.createTodo= async(req,res)=>{
    try {
        const {title,description}=req.body;
        //create a new Todo Object and insert into db
        const response= await Todo.create({title,description});
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Create Sucessfully",
        });
        console.log(response)

        
    } catch (error) {
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"internal server Error",
                message:"Error while creating "
            }
        )
        
    }
}

