const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://majdalbatran:11510289@cluster0.d7yzh9a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>{
        console.log('Connected to MongoDB')
    })
    .catch(err=>{
        console.log(err)
    })