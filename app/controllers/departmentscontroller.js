const Department= require('../models/department')


module.exports.list=(req,res)=>{
     Department.find({userid:req.user._id})
     .then((department)=>{
          res.json(department)
     })
     .catch((err)=>{
         res.json(err)
     })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const department=new Department(body)
    department.userid=req.user._id
    department.save()
    .then((department)=>{
         res.json(department)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Department.findOne({_id:id,userid:req.user._id})
     .then((department)=>{
        department?res.json(department):res.json({})
     })
     .catch((err)=>{
         res.json(err)

     })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Department.findOneAndUpdate({_id:id,userid:req.user._id},body,{new:true,runValidators:true})
    .then((department)=>{
        department?res.json(department):res.json({})
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.remove=(req,res)=>{
    const id=req.params.id
    Department.findOneAndDelete({_id:id,userid:req.user._id})
    .then((department)=>{
        department?res.json(department):res.json({})
    })
    .catch(err=>{
        res.json(err)
    })
}