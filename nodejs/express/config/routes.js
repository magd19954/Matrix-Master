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
route.post('/add-new-comment/:userid',userController.addComment)
route.post('/delete-comment/:userId/:commentId',userController.delComment)
// Wildcard route for 404 (Must be last)
route.get('*', userController.notFound);

module.exports = route;
