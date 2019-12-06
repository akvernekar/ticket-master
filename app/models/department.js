const mongoose=require('mongoose')
const schema=mongoose.Schema

const departmentSchema=new schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    userid:{
        type:schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})

const Department=mongoose.model('Department',departmentSchema)

module.exports=Department