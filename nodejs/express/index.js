const express=require('express');
const routes=require('./config/routes');
const app=express();
require('./config/mongoose');

app.use('/public',express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine', 'ejs');
app.use(routes);
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})


