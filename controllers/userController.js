const User = require('../models/userModel')

const loadRegister = async(req,res)=>{
    try {
        res.render("signUp")
    } catch (error) {
        console.log(error.message)
    }
}
const loadSignIn = async(req,res)=>{
    try {
        res.render("signIn")
    } catch (error) {
        console.log(error.message)
    }
}
const loadHome = async(req,res)=>{
    try {
        res.render("home")
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    loadRegister,
    loadSignIn,
    loadHome,
}