const express = require('express')
const user_route = express()

user_route.set('view engine','ejs');
user_route.set('views','./views/users')


const userController = require('../controllers/userController');



user_route.get('/signUp',userController.loadRegister);
user_route.get('/signIn',userController.loadSignIn);
user_route.get('/',userController.loadHome);



module.exports = user_route