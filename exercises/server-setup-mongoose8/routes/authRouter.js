const express = require("express")
const authRouter = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")


//sign up route mongoose 8
 authRouter.post("/signup", async (req, res, next) => {
    try {
        const usrt = await User.findOne((username: req.body.username))
        if (user){
            res.status(400)
            return next(new Error("Username already exists"))

        }
        const newUser = new User(req.body)
        const savedUser = await newUser.save()
        const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
        return res.status(201).send({token, user: savedUser.withoutPassword()})

    } catch (err) {
        res.status(500)
        return next(err)
    }



//log in route mongoose 8

authRouter.post("/login", async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if (!user){
            res.status(403)
            return next(new Error("Username or Password are incorrect"))
        }
        const isMatch = user.checkPassword(req.body.password)
        if (!isMatch){
            res.status(403)
            return next(new Error("Username or Password are incorrect"))
        }
        const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
        return res.status(200).send({token, user: user.withoutPassword()})
    } catch (err) {
        res.status(500)
        return next(err)
    }


module.exports = authRouter
