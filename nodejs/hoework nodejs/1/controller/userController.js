const homePage=function(req,res){
    let posts=[
            { name : "Michael Choi",
                createdAt : "23-01-2025",
                message : "This is my message    This is my message This is my message This is my messageThis is my message"
              },

              { name : "Majd Al Batran",
                createdAt : "23-01-2033",
                message : "This is my message    This is my message This is my message This is my messageThis is my message"
              },

              { name : "Sam",
                createdAt : "23-01-2022",
                message : "This is my message    This is my message This is my message This is my messageThis is my message"
              },
        
    ]
    res.render('homePage',{po:posts})
}

module.exports={homePage}