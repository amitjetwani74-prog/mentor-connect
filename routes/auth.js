const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User.js")

const router = express.Router()


// SIGNUP
router.post("/signup", async (req,res)=>{

const {name,email,password} = req.body

if(!name || !email || !password){
return res.status(400).json({msg:"All fields required"})
}

const existingUser = await User.findOne({ email: email })

if(existingUser){
return res.status(400).json({msg:"Email already registered"})
}

const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)

const user = new User({
name,
email,
password: hashedPassword
})

await user.save()

res.json({msg:"Signup successful"})

})



// LOGIN
router.post("/login", async (req,res)=>{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user){
return res.status(400).json({msg:"User not registered"})
}

const match = await bcrypt.compare(password,user.password)

if(!match){
return res.status(400).json({msg:"Incorrect password"})
}

const token = jwt.sign({id:user._id},"secret123")

res.json({
msg:"Login successful",
token,
user:{
name:user.name,
email:user.email
}
})

})


module.exports = router