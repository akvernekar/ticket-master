const Employee=require('../models/employees')


module.exports.list=(req,res)=>{
    Employee.find({userid:req.user._id}).populate('department')
    .then(employees=>{
        res.json(employees)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const employee=new Employee(body)
    employee.userid=req.user._id
    employee.save()
    .then(employee=>{
        res.json(employee)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Employee.findOne({_id:id,userid:req.user._id}).populate('department')
    .then(employee=>{
        employee?res.json(employee):res.json({})
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Employee.findOneAndUpdate({_id:id,userid:req.user._id},body,{new:true,runValidators:true})
    .then(employee=>{
        employee?res.json(employee):res.json({})
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.remove=(req,res)=>{
    const id=req.params.id
    Employee.findOneAndDelete({_id:id,userid:req.user._id})
    .then(employee=>{
        employee?res.json(employee):res.json({})
    })
    .catch(err=>{
        res.json(err)
    })
}