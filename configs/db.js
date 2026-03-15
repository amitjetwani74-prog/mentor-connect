const mongoose = require("mongoose")

const connectDB = async () => {

try {

await mongoose.connect("mongodb+srv://amitjetwani74_db_user:Jhamppa66@cluster0.tnbxtmy.mongodb.net/?appName=Cluster0")

console.log("MongoDB Connected")

} catch (error) {

console.error(error)
process.exit(1)

}

}

module.exports = connectDB