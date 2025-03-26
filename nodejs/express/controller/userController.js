const userModel=require('../models/userModels')
const homePage=function (req, res) {
    userModel.find()
        .then(result=>{
            res.render('hompage',{users:result})    
        })
        .catch(err=>{
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

module.exports={
    homePage,aboutUser,notFound,addNewUser,deleteUser,editeUserPage,editeUserForm
}