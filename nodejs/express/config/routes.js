const express = require('express');
const route = express.Router();
const userController=require('../controller/userController')

// Corrected routes (Removed './')
route.get('/', userController.homePage);

route.get('/about/:username/:admin', userController.aboutUser);
route.post('/add-new-user',userController.addNewUser)
route.get('/delete/user/:id',userController.deleteUser)
route.get('/update/user/:id',userController.editeUserPage)
route.post('/edite-user-form/:id',userController.editeUserForm)
// Wildcard route for 404 (Must be last)
route.get('*', userController.notFound);

module.exports = route;
