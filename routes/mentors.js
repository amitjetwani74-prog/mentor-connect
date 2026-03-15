const express = require("express")
const Mentor = require("../models/Mentor")

const router = express.Router()

// get mentors
router.get("/", async (req,res)=>{

const mentors = await Mentor.find()

res.json(mentors)

})

// add mentor
router.post("/add", async (req,res)=>{

const {name,expertise,experience,price} = req.body

const mentor = new Mentor({
name,
expertise,
experience,
price
})

await mentor.save()

res.json({msg:"Mentor added successfully"})

})

module.exports = router