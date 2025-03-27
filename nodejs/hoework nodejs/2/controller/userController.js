const userModel=require('../models/userModels')
const moment = require('moment');



const homePage=function(req,res){
    userModel.deleteMany({});
    userModel.find().sort({ dateOfPost: -1 })
    .then(result=>{
        res.render('homaPage',{users:result})    
    })
    .catch(err=>{
        console.log(err);
    })
}

const insertNewPost = function(req, res) {
    console.log(req.body.name)
    const newUser = new userModel({
        name: req.body.name,
        dateOfPost: moment().format('YYYY-MM-DD HH:mm:ss'), // Format the date

        postText: req.body.postText
    });
    newUser.save()
        .then(result => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err);
        })
};


module.exports={homePage,insertNewPost}
