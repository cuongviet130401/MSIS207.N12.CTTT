const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const videoroute = require('./model/shortVideoModel')


  

dotenv.config()          

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected!")).catch((err) => console.log(err))

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('BACKEND IS RUNNING')
  })

app.use("/api", videoroute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Backend server is running!")
}) 