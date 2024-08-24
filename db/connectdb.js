import mongoose from "mongoose";

const connectDB=(DATABASE_URL)=>{
    
    const DB_OPTIONS={
        dbName:'emp'
    }
    
    console.log("Connected Successfully...")
    return mongoose.connect(DATABASE_URL,DB_OPTIONS)
}

export default connectDB