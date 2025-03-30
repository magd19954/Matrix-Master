const userModel=require('../models/userModels')
const commentModel=require('../models/commentModels')
const homePage=function (req, res) {
    userModel.find()
    .sort({created_at:-1})
    .populate("comments")
    .then(result=>{        res.render('hompage',{users:result})    
        })
    .catch(err=>{
        console.log(err);
        })
    
    
}

const delComment=function(req,res){
    const { userId, commentId } = req.params;
    userModel.findById(userId)
    .then(user => {
        user.comments = user.comments.filter(id => id.toString() !== commentId);
        user.save()
            .then(()=>{
                commentModel.findByIdAndDelete(commentId)
                    .then(()=>{
                        res.redirect('/')})
                        .catch(err=>{
                            console.log(err);
                            })

            })
            .catch(err=>{
                console.log(err);
            })

    })
    .catch(err => {
        console.log(err);
        })
        
}

const aboutUser = function(req, res) {
    let isAdmin=false;
    res.render('about',
        {username:req.params.username,
            isAdmin:req.params.admin
        }
    );
}
const addNewUser=function(req,res){
    console.log(req.body);
    let newUser=new userModel(req.body);
    newUser.save()
        .then(()=>{
            res.redirect('/')
                }

        )
        .catch(err=>{
            console.log(err);
        })
}

const notFound=function(req,res){
    res.status(404).send('<h1> 404 Page Not Found</h1>');
}

const deleteUser=function(req,res){
    console.log(req.params.id)
    userModel.findByIdAndDelete(req.params.id)
    .then(result=>{
        res.redirect('/')
    })
    .catch(err=>{
        console.log(err);
    })
}
const editeUserPage=function(req,res){
    userModel.findById(req.params.id)
        .then(userinfo=>{
            res.render('editeUser',{user:userinfo})
        })
        .catch(err=>{console.log(err)})
}

const editeUserForm=function(req,res){
    userModel.findByIdAndUpdate(req.params.id,req.body)
        .then(()=>{
            res.redirect('/')
        })
        .catch(()=>{
            console.log(err);
        })
}
const addComment=function(req,res){
    let userID=req.params.userid;

if(req.body.body!=""&& userID){
    let commentData={
        ...req.body,
        user:userID
    }
    let newComment= new commentModel(commentData)
    newComment.save()
        .then(result=>{
            userModel.findById(userID)
                .then(userinfo=>{                    userinfo.comments.push(newComment._id)
                    userinfo.save()
                    .then(result=>{
                    res.redirect('/')
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                })
                .catch(err=>{
                    console.log(err);
                    })
            
        })
        .catch(err=>{
            console.log(err);
        })
}}

module.exports={
    homePage,aboutUser,notFound,addNewUser,deleteUser,editeUserPage,editeUserForm,addComment,delComment
}