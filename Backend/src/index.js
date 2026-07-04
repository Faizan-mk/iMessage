import express from "express"
import dotenv from "dotenv/config"
import user  from "./models/user_model.js"
import { connectDB } from "./config/db.js"
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'


const app=express()
const port=process.env.port
const frontendUrl=process.env.forntend_url
app.use(express.json())
app.use(cors({origin:forntend_url, credentials:true}))
app.use(clerkMiddleware())

app.get("/hello",(req,res)=>{
    res.status(200).json({message:"hello world"})
})

app.listen(port,()=>{
    connectDB()
    console.log("server is running on port:",port)
})