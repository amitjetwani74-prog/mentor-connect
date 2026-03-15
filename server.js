const express = require("express")
const cors = require("cors")
const connectDB = require("./configs/db")

const authRoutes = require("./routes/auth")
const mentorRoutes = require("./routes/mentors")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use(express.static("public"))

app.use("/api/auth",authRoutes)
app.use("/api/mentors", mentorRoutes)



const PORT = 5000

app.listen(PORT,()=>{

console.log("Server running on port "+PORT)

})