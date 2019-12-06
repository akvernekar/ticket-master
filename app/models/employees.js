const mongoose= require('mongoose')
const validator=require('validator')
const Schema=mongoose.Schema

employeeSchema=new Schema({
      name:{
          type:String,
          required:true
      },
      email:{
          type:String,
          required:true,
          validate:{
              validator:(value)=>{
                return validator.isEmail(value)
              },
              message:()=>{
                  return 'invalid email'
              }
          }
      },
      mobile:{
          type:String,
          validate:{
              validator:(value)=>{
                  return validator.isNumeric(value)
              },
              message:()=>{
                  return 'invalid mobile number'
              }
          }
      },
      department:{
          type:Schema.Types.ObjectId,
          required:true,
          ref:'Department'
      },
      userid:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})


const Employee=mongoose.model('Employee',employeeSchema)

module.exports=Employee