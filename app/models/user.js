const mongoose=require('mongoose')
const validator=require('validator')
const jwt=require('jsonwebtoken')
const bcryptjs=require('bcryptjs')
const Schema=mongoose.Schema


const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:5
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:(value)=>{
                return validator.isEmail(value)
            },
            message:()=>{
                return 'invalid email'
            }
        }
    },
    password:{
        type:String,
        minlength:8,
        maxlength:128,
        required:true
    },
    tokens:[
        {
            token:{
            type:String
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    }
]
})

//prehook
userSchema.pre('save',function(next){
    const user=this
    if(user.isNew){
        bcryptjs.genSalt(10)
        .then(salt=>{
            bcryptjs.hash(user.password,salt)
            .then(encrypted=>{
                user.password=encrypted
                next()
            })
        })
    }else{
        next()
    }

})

userSchema.statics.findByCredentials=(function(email,password){
    const User=this
    return User.findOne({email:email})
    .then(user=>{
        if(!user){
            return Promise.reject({errors:'invalid email'})
        }else{
            return bcryptjs.compare(password,user.password)
            .then(result=>{
                if(result){
                    return Promise.resolve(user)
                }else{
                    return Promise.reject({errors:'invalid password'})
                }
            })
        }
    })
    .catch(err=>{
        return Promise.reject(err)
    })
})

userSchema.statics.findByToken=function(token){
    const user=this
    let tokenData
    try{
        tokenData=jwt.verify(token,'jwt@123')
    }catch(err){ 
        return Promise.reject(err)
    } 
    return user.findOne({
        _id:tokenData._id,
        'tokens.token':token
    })
}


userSchema.methods.generateToken=function(){
    const user=this
    const tokenData={
        _id:user._id,
        username:user.username,
        createdAt:Number(new Date())
    }
    const token=jwt.sign(tokenData,'jwt@123')
    user.tokens.push({
        token:token
    })
    return user.save()
    .then(function(user){
        return Promise.resolve(token)
    })
    .catch(function(err){
        return Promise.reject(err)
    })
}

const User=mongoose.model('User',userSchema)

module.exports={User}