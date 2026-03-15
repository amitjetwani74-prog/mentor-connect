const mongoose = require("mongoose")

const MentorSchema = new mongoose.Schema({

name:String,
expertise:String,
experience:String,
price:Number

})

module.exports = mongoose.model("Mentor",MentorSchema)