import express from 'express'
import web from './routes/web.js'
import { join } from 'path'
import connectDB from './db/connectdb.js'
const app=express()
const port=process.env.PORT || '3000'
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDB(DATABASE_URL)
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }));


app.use(express.static(join(process.cwd(),'public')))
app.use('/edit',express.static(join(process.cwd(),'public')))
app.use('/',web)



app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})