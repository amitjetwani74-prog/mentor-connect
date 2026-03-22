const mongoose = require("mongoose")

const connectDB = async () => {

try {

// mongoose.connect("mongodb://amitjetwani74_db_user:Jhamppa66@ac-nximwpd-shard-00-00.tnbxtmy.mongodb.net:27017,ac-nximwpd-shard-00-01.tnbxtmy.mongodb.net:27017,ac-nximwpd-shard-00-02.tnbxtmy.mongodb.net:27017/mentorconnect?ssl=true&replicaSet=atlas-t9ok6y-shard-0&authSource=admin&retryWrites=true&w=majority")

mongoose.connect(process.env.MONGO_URI)

console.log("MongoDB Connected")

} catch (error) {

console.error(error)
process.exit(1)

}

}

module.exports = connectDB