const express =require('express')
const cors =require('cors')
const connectDb=require('./config/database')
const router =require('./config/routes')
const app=express()
const port=3026


app.use(express.json())

connectDb()
app.use(cors())
app.use('/',router)


app.listen(port,()=>{
     console.log('listning to port', port)
})