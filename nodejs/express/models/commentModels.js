const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let commentSchema=new mongoose.Schema(
    {
        body:{
            type:String,
            required:false
        },
        user:{
            type:Schema.Types.ObjectId,
            ref:'user',
        }
        ,
        created_at:{
            type:Date,
            default:Date.now()        }
    }
)

module.exports=mongoose.model("comment", commentSchema)