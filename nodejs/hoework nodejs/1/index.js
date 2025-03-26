const express=require('express')
const app=express();
const routes=require('../1/config/route')
app.use(routes);
app.set("view engine", "ejs");



app.listen(3000,()=>{
    console.log('server is running on port 3000')
})


