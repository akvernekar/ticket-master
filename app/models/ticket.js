const mongoose=require('mongoose')
const Schema=mongoose.Schema

ticketSchema=new Schema({
    customer:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Customer'
    },
    department:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Department'
    },
    employees:[{
        id:{
            type:Schema.Types.ObjectId,
            ref:'Employee'
        }
    }],
    title:{
        type:String,
       
    },
    priority:{
        type:String,
        enum:['low','medium','high'],
        required:true
    },
    message:{
        type:String,
        minlength:8
    },
    isResolved:{
        type:Boolean,
        default:false,
        required:true
    },
    code:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:new Date
    },
    userid:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }

})


//model

const Ticket=mongoose.model('Ticket',ticketSchema)

module.exports=Ticket