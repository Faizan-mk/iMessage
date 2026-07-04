import express from "express"
import dotenv from "dotenv/config"
import user  from "./models/user_model.js"
import { connectDB } from "./config/db.js"
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'


const app = express()
const port = process.env.port || 3000
const frontendUrl = process.env.FRONTEND_URL || process.env.frontend_url || 'http://localhost:5173'
const publicdir = path.join(process.cwd(), 'public')
app.use(express.json())
app.use(cors({ origin: frontendUrl, credentials: true }))
app.use(clerkMiddleware())

app.get("/hello",(req,res)=>{
    res.status(200).json({message:"hello world"})
})

if (fs.existsSync(publicdir)) {
    app.use(express.static(publicdir))

    app.get('*', (req, res, next) => {
      res.sendFile(path.join(publicdir, 'index.html'), (err) => { if (err) return next(err) })
    })
}

app.listen(port,()=>{
    connectDB()
    console.log("server is running on port:",port)
})