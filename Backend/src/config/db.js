import mongoose from 'mongoose'

export async function connectDB(){
    try{
        const db_url=process.env.DB_URL
        
        if(!db_url){
            throw new Error("database url is not defined")
        }

      const conn  = await mongoose.connect(db_url)
         console.log("database connected successfully",conn.connection.host)
    }
    catch(error){
        console.log("error in connecting to database:",error.message)
        process.exit(1)
    }
}