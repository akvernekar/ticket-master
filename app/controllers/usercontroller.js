const {User}=require('../models/user')
const _=require('lodash')


module.exports.create=(req,res)=>{
    const body=req.body
    const user=new User(body)
    user.save()
    .then(user=>{
        res.json(_.pick(user,['_id','email','username']))
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.login=(req,res)=>{
    const body=req.body
    User.findByCredentials(body.email,body.password)
    .then(user=>{
        return user.generateToken()
    })
    .then(token=>{
        // res.setHeader('x-auth',token).send({})
        res.send({token})
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.show=function(req,res){
    const user=req.user
    res.send(_.pick(user,['_id','username','email']))
}

module.exports.remove=function(req,res){
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(function(){
        res.send({notice:'successfully logged out'})
    })
    .catch(function(err){
        res.send(err)
    })
}

