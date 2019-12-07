const mongoose =require ('mongoose')

console.log(process.env.MONGODB_URI)
const connectDb=()=>{
mongoose.connect( process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  })
            .then(()=>{
                console.log('connected to db: ' + process.env.MONGODB_URI)
            })
            .catch((err)=>{
                console.log(err)
                console.log('error to db' + process.env.MONGODB_URI)

            })}

module.exports=connectDb          