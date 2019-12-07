const express =require('express')
const cors =require('cors')
const connectDb=require('./config/database')
const router =require('./config/routes')
const app=express()
const path = require('path');

const port= process.env.PORT || 3026;


app.use(express.json())

connectDb()

app.use(cors())

app.use(express.static(path.join(__dirname, './client/build/')));

app.use('/api',router)

app.get('*',(req,res)=>{
     res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(port,()=>{
     console.log('listning to port', port)
})