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
app.use('/',router)

if (process.env.NODE_ENV === 'production'){
     app.use(express.static( 'client/build' ));

     app.get('*',(req,res)=>{
          res.sendFile(path.join(_dirname, 'client', 'build', 'index.html'));
     });
}

app.listen(port,()=>{
     console.log('listning to port', port)
})