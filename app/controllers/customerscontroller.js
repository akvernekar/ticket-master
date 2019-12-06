const Customer =require('../models/customer')

module.exports.list=(req,res)=>{
    Customer.find({userid:req.user._id})
        .then((customer)=>{
            res.json(customer)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.create=(req,res)=>{
    // const body=req.body
    const customer=new Customer(req.body)
    customer.userid=req.user._id
    customer.save()
    .then((customer)=>{
            res.json(customer)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Customer.findOne({_id:id,userid:req.user._id})
    .then((customer)=>{
        if(customer){
        res.json(customer)}
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })

}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Customer.findOneAndUpdate({_id:id,userid:req.user._id},body,{new:true,runValidators:true})
    .then((customer)=>{
        if(customer){
        res.json(customer)}
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.remove=(req,res)=>{
    const id=req.params.id
    Customer.findOneAndDelete({_id:id,userid:req.user._id})
        .then((customer)=>{
           customer?res.json(customer):res.json({})
        })
        .catch((err)=>{
            res.json(err)
        })
}