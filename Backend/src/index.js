import express from "express"
import dotenv from "dotenv/config"
import user  from "./models/user_model.js"
import { connectDB } from "./config/db.js"
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'


const app=express()
const port=process.env.port
const frontendUrl=process.env.forntend_url
const publicdir=path.join(process.cwd(),'public')
app.use(express.json())
app.use(cors({origin:forntend_url, credentials:true}))
app.use(clerkMiddleware())

app.get("/hello",(req,res)=>{
    res.status(200).json({message:"hello world"})
})

if(fs.existssync(publicdir)){
   app.use(express.static(publicdir))

   app.get("/{*any}",(req,res,next)=>{
    res.sendFile(path.join(publicdir,'index.html'),(err) => next(err));
   });
}

app.listen(port,()=>{
    connectDB()
    console.log("server is running on port:",port)
})