const express=require('express')
const app=express();
const route=require('../2/config/routes')
app.set("view engine", "ejs");
require('../2/config/mongoose');
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); // Parses JSON data
app.use(route);

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})


