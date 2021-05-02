const express=require("express")
const morgan = require("morgan")
const data =require("./data")
const dataRoutes =require("./routes/dataRoutes")

const app=express()

app.use(express.json())
app.use(morgan("dev"))

app.use("/api/v1/data",dataRoutes)

app.get("/", (req,res) => {
    res.send("Welcome to Suraj's API ")
})



const port= process.env.PORT || 6000
app.listen(port,()=>console.log(`server running successfully on port http://localhost:${port}`))