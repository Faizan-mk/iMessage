import express from "express"
import dotenv from "dotenv/config"


const app=express()
const port=process.env.port
console.log(process.env.DB_URL)

app.listen(port,()=>{
    console.log("server is running on port:",port)
})