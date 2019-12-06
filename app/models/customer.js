const mongoose=require('mongoose')
const validator=require('validator')
const schema=mongoose.Schema 


customerSchema =new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        // unique:true,
        validate:{
            validator:(value)=>{
                return validator.isEmail(value)
            },
            message:()=>{
                return 'invalid email format'
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                return validator.isNumeric(value)
            },
            message:()=>{
                return 'invaid mobile number'
            }
        },
        minlength:10,
        maxlength:10
    },
    userid:{
        type:schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})


//model

const Customer =mongoose.model('Customer',customerSchema)

module.exports =Customer