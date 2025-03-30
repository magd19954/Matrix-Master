const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:false
        },
        comments:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'comment'
        }]
        ,
        email:{
            type:String,
            required:true
        }
        ,created_at:{
            type:Date,
            default:Date.now()
        }
    }
)

module.exports=mongoose.model("user", userSchema)